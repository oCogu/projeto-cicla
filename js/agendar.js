const ctx = document.getElementById('graficoVendas').getContext('2d');

    const graficoVendas = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Papelão', 'Papel', 'Plastico', 'Metal'],
        datasets: [{
          label: 'Quantidade Captada',
          data: [15, 5, 2, 0.8],
          backgroundColor: [
            '#af4c81ff',
            '#c3b74aff',
            '#CDDC39',
            '#8182d5ff',
          ],
          borderRadius: 10,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: '#0f1e16',
              font: {
                weight: 'bold'
              }
            }
          },
          title: {
            display: true,
            text: 'Comparação por coleta de materiais',
            color: '#0f1e16',
            font: {
              size: 18,
              weight: 'bold'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#0f1e16',
              stepSize: 5
            },
            grid: {
              color: '#c8e6c9'
            },
            title: {
              display: true,
              text: 'Quantidade',
              color: '#0f1e16',
              font: {
                weight: 'bold'
              }
            }
          },
          x: {
            ticks: {
              color: '#0f1e16'
            },
            grid: {
              display: false
            },
            title: {
              display: true,
              text: 'Produto',
              color: '#0f1e16',
              font: {
                weight: 'bold'
              }
            }
          }
        }
      }
    });