<template>
    <div
            @keydown="setKeydown($event)"
            @keydown.left="setKeydownLeft"
            @keydown.right="setKeydownRight"
            @mouseleave="selectStart = ''"
            :style="{width: attrComputed.width, height: attrComputed.height, boxShadow: attrComputed.boxShadow, position: 'relative'}">
        <div
                ref="boxRef"
                :class="{'input-box': true, 'size-medium': attrComputed.size === 'medium', 'size-small': attrComputed.size === 'small', 'size-mini': attrComputed.size === 'mini'}"
                @click.stop="boxClick">
            <div class="input-content" ref="contentRef" :style="{left: positionLeft}">
                <div
                        :class="{'input-content-i': true, 'input-content-i-first': parseInt(focusI) === -1 && selectStr.length === 0}"
                        :style="{width: inputPadding, lineHeight: inputLineHeight}">
                    <i>&nbsp;</i>
                </div>
                <div
                        ref="iRef"
                        :class="{'input-content-i': true, 'input-content-i-checked': parseInt(focusI) === index && selectStr.length === 0, 'input-content-i-select': selectStr.length === 0 ? false : ((index > parseInt(focusI) && index <= (parseInt(focusI) + selectStr.length)) ? true : false)}"
                        :style="{lineHeight: inputLineHeight}"
                        @mousedown="selectText(0, index)"
                        @mousemove="selectMove(index)"
                        @mouseup="selectText(1, index)"
                        v-for="(i, index) in inputValue">
                    <i :class="{'value-err': errData.indexOf(index) !== -1}">{{i === ' ' ? '&nbsp' : i}}</i>
                    <div class="input-content-i-left" @click.stop="iClick(index, 0)"></div>
                    <div class="input-content-i-right" @click.stop="iClick(index, 1)"></div>
                </div>
            </div>
        </div>
        <input
                ref="inputRef"
                type="text"
                v-model="inputValue"
                :maxlength="attrComputed.maxLength"
                @blur="inputBlur"
                @keydown.up="inputKeyDow($event)"
                @keydown.down="inputKeyDow($event)"
                class="input-input"
                style="border: 1px solid #ddd">
        <div
                ref="prompt"
                v-if="paraPrompt.length !== 0"
                :style="{height: promptHeight}"
                class="para-prompt">
            <div
                    ref="promptDiv"
                    :style="{top: promptPositionTop}">
                <span
                        ref="promptSpan"
                        v-for="(item, index) in paraPrompt"
                        :class="{'para-prompt-checked': paraPromptChecked === index}"
                        @click="paraListClick(item, focusIRecord)"
                        @mouseover="paraPromptChecked = index">{{index + 1 + ': ' + item}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        data: function () {
            return {
                focusI: '',
                focusIRecord: '',
                inputValue: '',
                positionLeft: 1,
                selectStr: '',
                selectStart: '',
                paraAttr: ['abc', 'bac', 'caa', 'eac', 'hab', 'kabm'],
                // 属性
                inputPadding: '5px',
                paraPrompt: [],
                paraPromptChecked: 0,
                errData: [],
                promptStr: '',
                promptHeight: '',
                promptPositionTop: '',
                oldIOffsetLeft: '',
                inputLineHeight: '',
                defaultData: {
                    attr: {
                        width: '100%',
                        height: '34px',
                        boxShadow: '0 0 1px 0 #666',
                        maxLength: '',
                        size: 'small'
                    }
                }
            }
        },
        props: ['refId', 'para', 'attr'],
        inject: ['sys'],
        watch: {
            para: {
                handler: function (val, oldVal) {
                    let $this = this
                    if (val && val.$api && val.$isShow && val.$isMounted && !$this.$lodash.isEqual(val, oldVal)) {
                        Object.assign($this, $this.sys.lib)
                        $this.pvt_isSubModuleStarted = true
                        $this.startModule(function () {
                            $this.inputLineHeight = ($this.$refs && $this.$refs.boxRef) ? $this.$refs.boxRef.offsetHeight + 'px' : ''
                            setTimeout(function () {
                                if ($this.$parent.subModuleActivatedEvent) {
                                    $this.$parent.subModuleActivatedEvent($this.refId)
                                }
                            }, 0)
                        }, function (error) {
                            console.log(error)
                        })
                    } else {
                        if ($this.$parent.subModuleActivatedEvent && $this.refId) {
                            $this.$parent.subModuleActivatedEvent($this.refId)
                        }
                    }
                },
                deep: true,
                immediate: true
            },
            inputValue: function (val, oldVal) {
                let $this = this
                $this.queryErr()
                $this.paraPrompt = []
                $this.paraPromptChecked = 0
                $this.promptPositionTop = ''
                setTimeout(function () {
                    let pd = /[\w\$_]/
                    for (let i = $this.focusI; i >= 0; i--) {
                        if (!pd.test(val[i]) || i === 0) {
                            i === 0 ? i = -1 : ''
                            val.slice(i + 1, $this.focusI + 1) !== '' ? $this.setParaPrompt(val.slice(i + 1, $this.focusI + 1)) : ''
                            $this.promptStr = {
                                content: val.slice(i + 1, $this.focusI + 1),
                                start: i + 1,
                                end: $this.focusI + 1
                            }
                            i = 0
                        }
                    }
                }, 0)
            }
        },
        computed: {
            attrComputed: function () {
                if (this.attr) {
                    for (let i in this.attr) {
                        this.defaultData.attr[i] ? this.defaultData.attr[i] = this.attr[i] : ''
                    }
                }
                return this.defaultData.attr
            }
        },
        methods: {
            boxClick: function () {
                let $this = this
                $this.selectStr = ''
                $this.focusI = $this.inputValue.length - 1
                $this.setCursor(parseInt($this.focusI))
            },
            iClick: function (i, index) {
                let $this = this
                $this.selectStr = ''
                if (index === 0) {
                    if (parseInt(i) != 0) {
                        $this.focusI = (parseInt(i) - 1).toString()
                    } else {
                        $this.focusI = i
                    }
                } else {
                    $this.focusI = i
                }

                setTimeout(function () {
                    $this.setCursor(parseInt($this.focusI))
                }, 0)
            },
            selectMove: function (select) {
                let $this = this
                if ($this.selectStart !== '') {
                    if ($this.selectStart < select) {
                        $this.selectStr = $this.inputValue.slice($this.selectStart, select + 1)
                        $this.focusI = $this.selectStart - 1
                        $this.setCursor($this.selectStart - 1, select + 1)
                    } else {
                        $this.selectStr = $this.inputValue.slice(select, $this.selectStart + 1)
                        $this.focusI = select - 1
                        $this.setCursor(select - 1, $this.selectStart + 1)
                    }
                }
            },
            selectText: function (index, select) {
                let $this = this
                if (index === 0) {
                    $this.selectStart = select
                } else if (index === 1) {
                    setTimeout(function () {
                        $this.selectStart = ''
                    }, 0)
                }
            },
            setKeydown: function (e) {
                let $this = this
                setTimeout(function () {
                    $this.getCursor()
                }, 0)
                if ($this.paraPrompt.length > 0) {
                    if (e.keyCode === 13) {
                        $this.paraListClick($this.paraPrompt[$this.paraPromptChecked], $this.focusI)
                    } else if (e.keyCode === 38) {
                        if (($this.$refs.promptSpan[$this.paraPromptChecked].offsetTop + $this.$refs.promptDiv.offsetTop) < $this.$refs.promptSpan[$this.paraPromptChecked].offsetHeight) {
                            if ($this.paraPromptChecked === 0) {
                                $this.promptPositionTop = -$this.$refs.promptSpan[0].offsetHeight * $this.paraPrompt.length + $this.$refs.prompt.offsetHeight + 'px'
                            } else {
                                $this.promptPositionTop = $this.$refs.promptSpan[$this.paraPromptChecked].offsetHeight - $this.$refs.promptSpan[$this.paraPromptChecked].offsetTop + 'px'
                            }
                        }
                        if ($this.paraPromptChecked > 0) {
                            $this.paraPromptChecked--
                        } else {
                            $this.paraPromptChecked = $this.paraPrompt.length - 1
                        }
                    } else if (e.keyCode === 40) {
                        if ($this.$refs.prompt.offsetHeight - ($this.$refs.promptSpan[$this.paraPromptChecked].offsetTop + $this.$refs.promptSpan[$this.paraPromptChecked].offsetHeight + $this.$refs.promptDiv.offsetTop) < $this.$refs.promptSpan[$this.paraPromptChecked].offsetHeight) {
                            if ($this.paraPromptChecked === $this.paraPrompt.length - 1) {
                                $this.promptPositionTop = ''
                            } else {
                                $this.promptPositionTop = $this.$refs.prompt.offsetHeight - ($this.$refs.promptSpan[$this.paraPromptChecked].offsetTop + $this.$refs.promptSpan[$this.paraPromptChecked].offsetHeight * 2) + 'px'
                            }
                        }
                        if ($this.paraPromptChecked < $this.paraPrompt.length - 1) {
                            $this.paraPromptChecked++
                        } else {
                            $this.paraPromptChecked = 0
                        }
                    }
                }
            },
            setKeydownLeft: function () {
                let $this = this
                $this.leftClick = true
                setTimeout(function () {
                    if (!$this.$refs.iRef[$this.focusI]) {
                        $this.positionLeft = ''
                    }
                    if ($this.$refs.iRef[$this.focusI] && ($this.$refs.iRef[$this.focusI].offsetLeft + $this.$refs.iRef[$this.focusI].offsetWidth) <= Math.abs((parseInt($this.positionLeft) ? parseInt($this.positionLeft) : 0))) {
                        $this.positionLeft = - $this.$refs.iRef[$this.focusI].offsetLeft + 'px'
                    }
                }, 0)
            },
            setKeydownRight: function () {
                let $this = this
                $this.rightClick = true
                setTimeout(function () {
                    if (($this.$refs.iRef[$this.focusI].offsetLeft + $this.$refs.iRef[$this.focusI].offsetWidth + parseInt($this.inputPadding) + (parseInt($this.positionLeft) ? parseInt($this.positionLeft) : 0)) > $this.$refs.boxRef.offsetWidth) {
                        $this.positionLeft = $this.$refs.boxRef.offsetWidth - ($this.$refs.iRef[$this.focusI].offsetLeft + $this.$refs.iRef[$this.focusI].offsetWidth + parseInt($this.inputPadding)) + 'px'
                    }
                }, 0)
            },
            getCursor: function () {
                let $this = this
                // 获取光标
                if (navigator.userAgent.indexOf('compatible') == -1) {//非IE
                    $this.focusI = $this.$refs.inputRef.selectionStart - 1
                } else {
                    let selectRange = document.selection.createRange()
                    selectRange.moveStart('character', -$this.$refs.inputRef.value.length)
                    $this.focusI = selectRange.text.length
                }
                // 设置左移
                if ($this.inputValue === '') {
                    $this.positionLeft = ''
                }
                if ($this.focusI !== -1 && $this.$refs.iRef[$this.focusI] && ($this.$refs.iRef[$this.focusI].offsetLeft + $this.$refs.iRef[$this.focusI].offsetWidth + parseInt($this.inputPadding)) > ($this.$refs.boxRef.offsetWidth + Math.abs((parseInt($this.positionLeft) ? parseInt($this.positionLeft) : 0)))) {
                    $this.positionLeft = $this.$refs.boxRef.offsetWidth - ($this.$refs.iRef[$this.focusI].offsetLeft + $this.$refs.iRef[$this.focusI].offsetWidth + parseInt($this.inputPadding)) + 'px'
                }
                if ($this.$refs.iRef && $this.$refs.iRef[parseInt($this.focusI) - 1]) {
                    if ($this.$refs.iRef[parseInt($this.focusI) - 1] && ($this.$refs.iRef[parseInt($this.focusI) - 1].offsetLeft + $this.$refs.iRef[parseInt($this.focusI) - 1].offsetWidth) < Math.abs((parseInt($this.positionLeft) ? parseInt($this.positionLeft) : 0))) {
                        $this.positionLeft = -($this.$refs.iRef[parseInt($this.focusI) - 1].offsetLeft + $this.$refs.iRef[parseInt($this.focusI) - 1].offsetWidth) + 'px'
                    }
                } else {
                    $this.positionLeft = ''
                }
                if ($this.$refs.contentRef.offsetWidth > $this.$refs.boxRef.offsetWidth && $this.$refs.contentRef.offsetWidth - Math.abs((parseInt($this.positionLeft) ? parseInt($this.positionLeft) : 0)) < $this.$refs.boxRef.offsetWidth) {
                    $this.positionLeft = $this.$refs.boxRef.offsetWidth - $this.$refs.contentRef.offsetWidth + 'px'
                }
                // 判断浏览器 获取选中内容
                let browser = navigator.appName
                let b_version = navigator.appVersion
                let version = b_version.split(";")
                let trim_Version = 9
                if (version.length > 1) {
                    trim_Version = parseInt(version[1].replace(/[ ]/g, "").replace(/MSIE/g, ""));
                }
                if (trim_Version < 9) {
                    $this.selectStr = document.selection.createRange().text
                } else {
                    $this.selectStr = window.getSelection().toString()
                }
            },
            setCursor: function (index) {
                let $this = this
                $this.$refs.inputRef.focus()
                if ($this.$refs.inputRef.createTextRange) {
                    let range = $this.$refs.inputRef.createTextRange()
                    range.collapse(true)
                    range.moveEnd('character', arguments[1] ? arguments[1] : index + 1)
                    range.moveStart('character', index + 1)
                } else {
                    $this.$refs.inputRef.setSelectionRange(index + 1, arguments[1] ? arguments[1] : index + 1)
                }
            },
            queryErr: function () {
                let $this = this
                $this.errData = []
                if ($this.inputValue === '') {
                    return
                }
                // 首字符
                let pd_1 = /^[0-9a-zA-Z\_("'!{]/
                pd_1.test($this.inputValue) ? '' : $this.errData.push(0)
                let fhRecord ={
                    '"': [],
                    "'": [],
                    '(': [],
                    '[': [],
                    '{': [],
                    para: []
                }
                let pushI = ''
                for (let i in $this.inputValue) {
                    pushI = parseInt(i)
                    if (fhRecord['"'].length === 0 && fhRecord["'"].length === 0) {
                        let pd_2 = /[0-9a-zA-Z\])}[({ ;:="'<>+,.|\-*/!$%&_]/
                        if (!pd_2.test($this.inputValue[i])) {
                            $this.errData.push(pushI)
                        } else {
                            let pd_8 = /[0-9a-zA-Z\_.]/
                            if (pd_8.test($this.inputValue[i]) && pushI !== ($this.inputValue.length - 1)) {
                                fhRecord.para.push(pushI)
                            } else {
                                if (pushI === ($this.inputValue.length - 1) && pd_8.test($this.inputValue[i])) {
                                    fhRecord.para.push(pushI)
                                }
                                if (fhRecord.para.length !== 0) {
                                    let paraStr = ''
                                    fhRecord.para.forEach(function (val, index) {
                                        if ($this.inputValue[val] === '.') {
                                            return
                                        }
                                        paraStr += $this.inputValue[val]
                                    })
                                    if ($this.paraAttr.indexOf(paraStr) === -1) {
                                        let pd_9 = /^((0|[1-9])+\.?)?[0-9]*$/
                                        if (!pd_9.test(paraStr)) {
                                            $this.errData = $this.errData.concat(fhRecord.para)
                                        }
                                    }
                                    fhRecord.para = []
                                }
                            }
                            $this.inputValue[i] === '"' ? fhRecord['"'].push(pushI) : ''
                            $this.inputValue[i] === "'" ? fhRecord["'"].push(pushI) : ''
                            $this.inputValue[i] === '(' ? fhRecord["("].push(pushI) : ''
                            $this.inputValue[i] === '[' ? fhRecord["["].push(pushI) : ''
                            $this.inputValue[i] === '{' ? fhRecord["{"].push(pushI) : ''
                            if ($this.inputValue[i] === ')') {
                                if ((fhRecord["["].length > 0 && fhRecord["["][fhRecord["["].length - 1] > fhRecord["("][fhRecord["("].length - 1]) || (fhRecord["{"].length > 0 && fhRecord["{"][fhRecord["{"].length - 1] > fhRecord["("][fhRecord["("].length - 1]) || fhRecord["("].length === 0) {
                                    $this.errData.push(pushI)
                                } else {
                                    fhRecord["("].pop()
                                }
                            }
                            if ($this.inputValue[i] === ']') {
                                if ((fhRecord["("].length > 0 && fhRecord["("][fhRecord["("].length - 1] > fhRecord["["][fhRecord["["].length - 1]) || (fhRecord["{"].length > 0 && fhRecord["{"][fhRecord["{"].length - 1] > fhRecord["["][fhRecord["["].length - 1]) || fhRecord["["].length === 0) {
                                    $this.errData.push(pushI)
                                } else {
                                    fhRecord["["].pop()
                                }
                            }
                            if ($this.inputValue[i] === '}') {
                                if ((fhRecord["("].length > 0 && fhRecord["("][fhRecord["("].length - 1] > fhRecord["{"][fhRecord["{"].length - 1]) || (fhRecord["["].length > 0 && fhRecord["["][fhRecord["["].length - 1] > fhRecord["{"][fhRecord["{"].length - 1]) || fhRecord["{"].length === 0) {
                                    $this.errData.push(pushI)
                                } else {
                                    fhRecord["{"].pop()
                                }
                            }
                            // 多空格
                            if ($this.inputValue[pushI - 1] === ' ' && $this.inputValue[pushI - 2] && $this.inputValue[pushI - 2] === ' ') {
                                $this.errData.push(pushI)
                            }
                            // 运算符
                            let pd_3 = /[0-9a-zA-Z\]\_ +)}$'"]/
                            if ($this.inputValue[i] === '+' && $this.inputValue[pushI - 1]) {
                                if (!pd_3.test($this.inputValue[pushI - 1]) || ($this.inputValue[pushI - 1] === '+' && $this.inputValue[pushI - 2] && $this.inputValue[pushI - 2] === '+') || ($this.inputValue[pushI - 1] === ' ' && $this.inputValue[pushI - 2] && !pd_3.test($this.inputValue[pushI - 2]))) {
                                    $this.errData.push(pushI)
                                }
                            }
                            let pd_4 = /[0-9a-zA-Z\]\_ \-)}$'"]/
                            if ($this.inputValue[i] === '-' && $this.inputValue[pushI - 1]) {
                                if (!pd_4.test($this.inputValue[pushI - 1]) || ($this.inputValue[pushI - 1] === '-' && $this.inputValue[pushI - 2] && $this.inputValue[pushI - 2] === '-') || ($this.inputValue[pushI - 1] === ' ' && $this.inputValue[pushI - 2] && !pd_4.test($this.inputValue[pushI - 2]))) {
                                    $this.errData.push(pushI)
                                }
                            }
                            let pd_5 = /[0-9a-zA-Z\]\_ )$}]/
                            if (($this.inputValue[i] === '*' || $this.inputValue[i] === '/') && $this.inputValue[pushI - 1]) {
                                if (!pd_5.test($this.inputValue[pushI - 1]) || ($this.inputValue[pushI - 1] === ' ' && $this.inputValue[pushI - 2] && !pd_5.test($this.inputValue[pushI - 2]))) {
                                    $this.errData.push(pushI)
                                }
                            }
                            let pd_6 = /[0-9a-zA-Z\])}_=!$ +\-]/
                            if ($this.inputValue[i] === '=' && $this.inputValue[pushI - 1]) {
                                if (!pd_6.test($this.inputValue[pushI - 1]) || ($this.inputValue[pushI - 1] === '=' && $this.inputValue[pushI - 2] && $this.inputValue[pushI - 2] === '=') || ($this.inputValue[pushI - 1] === ' ' && $this.inputValue[pushI - 2] && !pd_6.test($this.inputValue[pushI - 2]))) {
                                    $this.errData.push(pushI)
                                }
                            }
                            let pd_7 = /[0-9a-zA-Z\])}_$ &]/
                            if ($this.inputValue[i] === '&' && $this.inputValue[pushI - 1]) {
                                if (!pd_7.test($this.inputValue[pushI - 1]) || ($this.inputValue[pushI - 1] === '&' && $this.inputValue[pushI - 2] && $this.inputValue[pushI - 2] === '&') || ($this.inputValue[pushI - 1] === ' ' && $this.inputValue[pushI - 2] && !pd_7.test($this.inputValue[pushI - 2]))) {
                                    $this.errData.push(pushI)
                                }
                            }
                        }
                    } else {
                        if (fhRecord['"'].length !== 0) {
                            if ($this.inputValue[i] === '"') {
                                fhRecord['"'] = []
                            } else {
                                fhRecord['"'].push(pushI)
                            }
                        } else if (fhRecord["'"].length !== 0) {
                            if ($this.inputValue[i] === "'") {
                                fhRecord["'"] = []
                            } else {
                                fhRecord["'"].push(pushI)
                            }
                        }
                    }
                    if (parseInt(i) === $this.inputValue.length - 1) {
                        if (fhRecord['"'].length !== 0) {
                            $this.errData = $this.errData.concat(fhRecord['"'])
                        } else if (fhRecord["'"].length !== 0) {
                            $this.errData = $this.errData.concat(fhRecord["'"])
                        }
                        fhRecord['('].length > 0 ? ($this.errData = $this.errData.concat(fhRecord['('])) : ''
                        fhRecord['['].length > 0 ? ($this.errData = $this.errData.concat(fhRecord['['])) : ''
                        fhRecord['{'].length > 0 ? ($this.errData = $this.errData.concat(fhRecord['{'])) : ''
                    }
                }
            },
            setParaPrompt: function (str) {
                let $this = this
                let paraArr = {
                    heightMatching: [],
                    matching: []
                }
                $this.paraAttr.forEach(function (val, index) {
                    if (val.indexOf(str) !== -1) {
                        if (val.indexOf(str) === 0) {
                            paraArr.heightMatching.push(val)
                        } else {
                            paraArr.matching.push(val)
                        }
                    }
                })
                $this.paraPrompt = paraArr.heightMatching.sort().concat(paraArr.matching)
                setTimeout(function () {
                    if ($this.$refs.promptSpan && $this.$refs.promptSpan[0]) {
                        $this.promptHeight = $this.$refs.promptSpan[0].offsetHeight * $this.paraPrompt.length + 'px'
                    }
                }, 0)
            },

            paraListClick: function (para, index) {
                let $this = this
                $this.oldIOffsetLeft = $this.$refs.iRef[index].offsetLeft + parseInt($this.positionLeft)
                $this.inputValue = $this.inputValue.slice(0, $this.promptStr.start) + para + $this.inputValue.slice($this.promptStr.end)
                setTimeout(function () {
                    $this.setCursor($this.promptStr.start + para.length - 1)
                    $this.getCursor()
                    setTimeout(function () {
                        $this.paraPrompt = []
                        if ($this.$refs.iRef[$this.focusI]) {
                            $this.positionLeft = $this.oldIOffsetLeft - $this.$refs.iRef[$this.focusI].offsetLeft + 'px'
                        }
                        $this.callModuleEventPort('expressionInputblur', [$this.inputValue, $this.errData])
                    })
                }, 0)
            },
            inputKeyDow: function (e) {
                if (this.paraPrompt.length !== 0) {
                    if (e.preventDefault) {
                        e.preventDefault()
                    } else {
                        e.returnValue = false
                    }
                }
            },
            inputBlur: function () {
                let $this = this
                $this.focusIRecord = $this.focusI
                $this.focusI = ''
                if ($this.paraPrompt.length === 0) {
                    $this.callModuleEventPort('expressionInputblur', [$this.inputValue, $this.errData])
                }
            },
            setValue: function (value, successCallBack, errorCallBack) {
                this.inputValue = value
                successCallBack()
            },
            // createDivList: function () {
            //     let $this = this
            //     let variableList = Vue.extend({
            //         template: '<div ref="prompt" v-if="paraPrompt.length !== 0" :style="{height: promptHeight}" class="para-prompt"><div ref="promptDiv" :style="{top: promptPositionTop}"><span ref="promptSpan" v-for="(item, index) in paraPrompt" :class="{\'para-prompt-checked\': paraPromptChecked === index}" @click="paraListClick(item, focusIRecord)" @mouseover="paraPromptChecked = index">{{index + 1 + \': \' + item}}</span></div></div>'
            //     })
            // }
            startModule: function (successCallBack, errorCallBack) {
                let $this = this

                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    }
                    successCallBack = null
                }
                let para = errorCallBack
                let dbFlag = 0

                while (1) {
                    dbFlag = 0
                    switch (para.nStep) {
                        case 0:
                            if ($this.para.defaultVal.$table === '') {
                                $this.inputValue = $this.para.defaultVal.$value[0]
                                para.nStep = 'setVariableArr'
                                dbFlag++
                            } else {
                                let contentData = {}
                                contentData.id = $this.para.defaultVal.$value
                                contentData[$this.para.defaultVal.$field] = []
                                $this.sys.api.recordRead($this.para.defaultVal.$table, contentData, function (result) {
                                    $this.inputValue = contentData[$this.para.defaultVal.$field][0]
                                    para.nStep = 'setVariableArr'
                                    if (++dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, function (error) {
                                    console.log(error)
                                })
                            }
                            break
                        case 'setVariableArr':
                            $this.paraAttr = []
                            if ($this.para.expInputData) {
                                if ($this.para.expInputData.$table != '') {
                                    let tableData = {}
                                    if ($this.para.expInputData.$value.length == 0) {
                                        para.nStep = 'end'
                                        dbFlag++
                                        break
                                    }
                                    let configs = JSON.stringify($this.para.expInputData.$value)
                                    $this.sys.api.recordQuery($this.para.expInputData.$table, '', '(id=' + configs + ')', tableData, function (result) {
                                        for (let i in tableData.id) {
                                            $this.paraAttr.push(tableData[$this.para.expInputData.$field][i])
                                        }
                                        para.nStep = 'end'
                                        if (++dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    }, function (error) {
                                        console.log(error)
                                    })
                                } else {
                                    $this.paraAttr = $this.paraAttr.concat($this.para.expInputData.$value)
                                    para.nStep = 'end'
                                    dbFlag++
                                }
                            }
                            break
                        case 'end':
                            para.successCallBack()
                            break
                    }
                    if (++dbFlag == 1) {
                        return
                    }
                }
            },
        },
        mounted: function () {
            if (this.$parent.pvt_isMounted) {
                this.$parent.pvt_isMounted[this.refId] = true
            }
            let $this = this
            $this.inputLineHeight = ($this.$refs && $this.$refs.boxRef) ? $this.$refs.boxRef.offsetHeight + 'px' : ''
        }
    }
</script>

<style lang="scss" scoped>
    .input-box {
        overflow: hidden;
        border: 1px solid transparent;
        border-radius: 2px;
        /*box-shadow: 0 0 0 1px #999;*/
        height: 30px;
        cursor: text;
        position: relative;
    }
    .input-content {
        height: 100%;
        padding-right: 5px;
        display: inline-block;
        white-space: nowrap;
        position: absolute;
    }
    .size-medium {
        font-size: 18px;
    }
    .size-small {
        font-size: 16px;
    }
    .size-mini {
        font-size: 12px;
    }
    .input-content-i {
        vertical-align: top;
        height: 100%;
        font-style: normal;
        color: #666;
        display: inline-block;
        position: relative;
    }
    .input-content-i-first {
        text-align: right;
    }
    .input-content-i-first i:before {
        content: '';
        height: 100%;
        background-color: #666;
        width: 1px;
        position: absolute;
        right: 0;
        animation: inputcursor 1.1s infinite
    }
    .input-content-i i {
        font-style: normal;
        position: relative;
        display: inline-block;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        line-height: normal;
    }
    .input-content-i .value-err {
        color: #f56c6c;
    }
    .input-content-i-left {
        width: 50%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .input-content-i-right {
        width: 50%;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
    }
    .input-content-i-checked i:before {
        content: '';
        height: 100%;
        background-color: #666;
        width: 1px;
        position: absolute;
        right: 0;
        animation: inputcursor 1.1s infinite
    }
    .input-content-i-select {
        background-color: #409EFF;
    }
    .input-content-i-select i {
        color: #fff !important;
    }
    .input-content-i-select i:before {
        content: '';
        display: none;
    }
    @keyframes inputcursor {
        0% {
            opacity: 1;
        }
        49% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }
    .input-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
        opacity: 0;
    }
    .para-prompt {
        position: absolute;
        overflow: hidden;
        top: 35px;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        box-shadow: 0 0 2px 0 #999;
        max-height: 100px;
        border: 1px solid #999;
        cursor: pointer;
        z-index: 99;
    }
    .para-prompt div {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .para-prompt span {
        display: block;
        padding: 0 10px;
        color: #666;
        background-color: #fff;
        line-height: 34px;
    }
    .para-prompt-checked {
        background-color: #ddd !important;
    }
</style>
