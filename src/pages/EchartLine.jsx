import { connect } from 'react-redux';
import ReactECharts from 'echarts-for-react';

const EchartLine = (props) => {
    const option = {
        xAxis: {
            type: 'category',
            data: props.dataset.map( (itemHari) => itemHari.Hari )
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: props.dataset.map( (itemPenonton) => itemPenonton.JumlahPenonton ),
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
        label: globalState.label,
        dataset: globalState.dataset
    }
}

export default connect(stateToProps)(EchartLine)
