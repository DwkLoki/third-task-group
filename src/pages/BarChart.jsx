import { connect } from 'react-redux'
import { Bar } from 'react-chartjs-2'

const BarChart = (props) => {

    const data =  {
    // get data dan labels dari store
    labels: props.label,
    datasets: [
        {
        label: '# of Votes',
        data: props.data,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        },
    ],
    }

    const options = {
    scales: {
        yAxes: [
        {
            ticks: {
            beginAtZero: true,
            },
        },
        ],
    },
    }

    return (
        <>
            <Bar data={data} options={options} />  
        </>
    )
}

const stateToProps = (globalState) => {
    return {
        data: globalState.data,
        label: globalState.label
    }
}

export default connect(stateToProps)(BarChart)
