import ReactECharts from 'echarts-for-react';
import { connect } from 'react-redux'

const EchartBar = (props) => {
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
        label: globalState.label,
        dataset: globalState.dataset
    }
}


export default connect(stateToProps)(EchartBar)
