import { connect } from 'react-redux';
import ReactECharts from 'echarts-for-react';

const EchartLine = (props) => {
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
            type: 'line'
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

export default connect(stateToProps)(EchartLine)
