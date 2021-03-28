<template>
    <div>
        <div ref="svg" :style="{'width':attrData.width,'height':attrData.height}"></div>
    </div>

</template>

<script>
	import ECharts from 'echarts/lib/echarts';
	import 'echarts/lib/chart/line';
	import 'echarts/lib/component/legend';
	import 'echarts/lib/component/tooltip';
	import 'echarts/lib/component/title';
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

	export default {
		name: "LmLine",
		props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
		inject: ['sys'],
		data: function () {
			return {
				value: null,
				line: {
					para: {},
					attr: {
						series: null,
						legend: null,
						tooltip: null,
						color: null,
					}
				},
				pvt_eventPortInput: []
			}
		},
		computed: {
			attrData() {
				if (this.attr === undefined) {
					return this.line.attr;
				} else {
					return this.attr
				}

			}
		},
		created: function () {
			let $this = this;
			Object.assign($this, libSys, libUpload);
			$this.pvt_initSysData();
		},
		mounted() {
			this.selfAdaption()
		},
		methods: {
			setPara: function (successCallBack, errorCallBack) {
				var para = {};
				para.successCallBack = successCallBack;
				para.errorCallBack = errorCallBack;
				para.nStep = 0;
				return para;
			},
			startModule(successCallBack, errorCallBack) {
				let $this = this;
				let options;
				let dbFlag;
				if (successCallBack !== null) {
					errorCallBack = $this.setPara(successCallBack, errorCallBack);
					successCallBack = null;
				}
				let para = errorCallBack;
				while (1) {
					dbFlag = 0;
					switch (para.nStep) {
						case 0:
						case 'find_line':
							let $arrValueY = $this.para && $this.para.yData ? $this.para.yData : null;

							if ($arrValueY && Array.isArray($arrValueY)) {

								let series = $this.attrData.series ? $this.attrData.series : [];
								$this.value = $arrValueY;
								for (let i = 0; i < $arrValueY.length; i++) {
									series[i].data = $arrValueY[i];
								}
								options = {
									xAxis: this.attrData.xAxis ? this.attrData.xAxis : null,
									yAxis: this.attrData.yAxis ? this.attrData.yAxis : null,
									legend: this.attrData.legend ? this.attrData.legend : null,
									tooltip: this.attrData.tooltip ? this.attrData.tooltip : null,
									color: this.attrData.color ? this.attrData.color : null,
									series: series
								};
								$this.options = options;
								$this.init(options);
							}
							para.nStep = 'end';
							dbFlag++;
							break;
						case 'end':
							para.successCallBack()
							return;
					}
					if (++dbFlag === 1) {
						return
					}

				}
			},
			init(data) {
				var myChart = ECharts.init(this.$refs.svg);
				myChart.setOption(data,true);
				myChart.on('dblclick', function (params) {
					console.log(params)
				});
			},
			selfAdaption() {
				let $this = this;
                setTimeout(() => {
	                window.onresize = function () {
		                ECharts.init($this.$refs.svg).resize();
	                }
                }, 10)
			},
			//    当属性发生变化
			attribute() {
				let $this = this;
				let series = $this.attrData.series ? $this.attrData.series : [];
				for (let i = 0; i < this.value.length; i++) {
					series[i].data = this.value[i];
				}
				let options = {
					xAxis: this.attrData.xAxis ? this.attrData.xAxis : null,
					yAxis: this.attrData.yAxis ? this.attrData.yAxis : null,
					legend: this.attrData.legend ? this.attrData.legend : null,
					tooltip: this.attrData.tooltip ? this.attrData.tooltip : null,
					color: this.attrData.color ? this.attrData.color : null,
					series: series
				};
				$this.init(options);
			}
		}
	}
</script>

<style scoped>

</style>

