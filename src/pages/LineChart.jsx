import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
      const data = {
      labels: props.dataset.map( (itemHari) => itemHari.Hari ),
      datasets: [
        {
          label: '# of Votes',
          data: props.dataset.map( (itemPenonton) => itemPenonton.JumlahPenonton ),
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
        label: globalState.label,
        dataset: globalState.dataset
    }
}

export default connect(stateToProps)(LineChart)

