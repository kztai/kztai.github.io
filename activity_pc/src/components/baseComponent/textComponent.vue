<script>
    export default {
        inject: ['sys'],
        props: ['refId', 'para', 'attr'],
        data: function () {
            return {
                pvt_isSubModuleStarted: false,
                textContent: '文本组件',
                textAttr: {
                    label: 'span',
                    color: '',
                    fontSize: '',
                    fontWeight: false,
                    height: '40px',
                    textAlign: 'left'
                }
            }
        },
        computed: {
            attrData: function () {
                if (this.attr !== undefined) {
                    for (let i in this.attr) {
                        this.textAttr[i] = this.attr[i]
                    }
                }
                return this.textAttr
            }
        },
        watch: {
            para: {
                handler: function (val, oldVal) {
                    let $this = this
                    if (val && val.$api && val.$isShow && val.$isMounted) {
                        Object.assign($this, $this.sys.lib)
                        $this.pvt_isSubModuleStarted = true
                        this.startModule()
                    }
                },
                deep: true,
                immediate: true
            },
            attr: {
                handler: function () {
                    if (this.para && this.para.$api && this.para.$isShow && this.para.$isMounted) {
                        this.startModule()
                    }
                },
                deep: true
            }
        },
        render: function (createElement) {
            let $this = this
            return createElement($this.attrData.label, {
                style: {
                    display: 'block',
                    fontSize: $this.attrData.fontSize,
                    fontWeight: $this.attrData.fontWeight ? 'bold' : 'normal',
                    color: $this.attrData.color,
                    textAlign: $this.attrData.textAlign,
                    lineHeight: $this.attrData.height
                }
            }, $this.textContent)
        },
        methods: {
            startModule: function () {
                let $this = this
                $this.mac = mac.mac
                if ($this.para.textData) {
                    if ($this.para.textData.$table != '') {
                        //查表
                        let data = {}
                        $this.sys.api.recordQuery($this.para.textData.$table, '', '(' + this.mac.fd.id + '=' + $this.para.textData.$value[0] + ')', data, function (result) {
                            $this.textContent = data[$this.para.textData.$field[0]][0]
                        }, function (error) {
                            console.log(error)
                        })
                    } else {
                        $this.textContent = $this.para.textData.$value
                    }
                }
            },
            setTextContent: function (texts) {
                this.textContent = texts
            },
            getTextContent: function () {
                return this.textContent
            }
        },
        mounted: function () {
            if (this.$parent.pvt_isMounted) {
                this.$parent.pvt_isMounted[this.refId] = true
            }
        },
        activated: function () {
            if (this.$parent.subModuleActivatedEvent) {
                this.$parent.subModuleActivatedEvent(this.refId)
            }
        }
    }
</script>

<style>

</style>
