import ReactECharts from 'echarts-for-react';
import { connect } from 'react-redux'

const EchartBar = (props) => {
    const option = {
        xAxis: {
            type: 'category',
            data: props.label
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: props.data,
            type: 'bar'
        }]
    };
    return (
        <div>
            <ReactECharts option={option} />
        </div>
    )
}

const stateToProps = (globalState) => {
    return {
        data: globalState.data,
        label: globalState.label
    }
}


export default connect(stateToProps)(EchartBar)
