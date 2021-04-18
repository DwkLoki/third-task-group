import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
      const data = {
      labels: props.label,
      datasets: [
        {
          label: '# of Votes',
          data: props.data,
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
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
            <Line data={data} options={options} />   
        </>
    )
}

const stateToProps = (globalState) => {
    return {
        data: globalState.data,
        label: globalState.label
    }
}

export default connect(stateToProps)(LineChart)

