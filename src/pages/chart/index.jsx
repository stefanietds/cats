import Header from './../../components/header/index';
import React, { useState, useEffect } from 'react'; 
import Plot from 'react-plotly.js';

const Chart = () => {
  const [plotData, setPlotData] = useState([]);
  const [layout, setLayout] = useState({});

  const data = [
    {
      "x": ["2025-01-18T10:00:00", "2025-01-18T11:00:00", "2025-01-18T12:00:00", "2025-01-18T13:00:00"],
      "y": [10, 15, 13, 17],
      "unit": "Altura (m)"
    },
    {
      "x": ["2025-01-18T10:00:00", "2025-01-18T11:00:00", "2025-01-18T12:00:00", "2025-01-18T13:00:00"],
      "y": [30, 45, 35, 50],
      "unit": "Tempo (s)"
    },
    {
        "x": ["2025-01-18T10:00:00", "2025-01-18T11:00:00", "2025-01-18T12:00:00", "2025-01-18T13:00:00"],
        "y": [3, 5, 35, 50],
        "unit": "Metro (mm)"
      }
  ];

  const processData = (chartData) => {
    const dataToPlot = [];
    const layoutConfig = {
      title: 'Gráfico com Unidades e Eixos Dinâmicos',
      xaxis: {
        title: 'Data e Hora',
        type: 'date',
      },
      showlegend: true,
    };

    let yAxisCounter = 1;
    let rightAxisDomainStart = 0.85; // Posição inicial para os eixos à direita 

    chartData.forEach((item) => {
      const { x, y, unit } = item;
      
      const yAxisKey = `y${yAxisCounter}`;

      const axisConfig = {
        title: `${unit}`,
        side: yAxisCounter === 1 ? 'left' : 'right',
        overlaying: yAxisCounter === 1 ? null : 'y',
        domain: yAxisCounter > 1 ? [rightAxisDomainStart, rightAxisDomainStart + 0.99] : undefined, // Controla a posição dos eixos à direita
      };

      // Adicionando os dados
      dataToPlot.push({
        x,
        y,
        type: 'scatter',
        mode: 'lines+markers',
        name: `${unit}`,
        yaxis: yAxisKey,
      });

      // Configurando o layout dos eixos
      layoutConfig[`yaxis${yAxisCounter}`] = axisConfig;

      // Atualiza a posição para o próximo eixo à direita
      if (yAxisCounter > 1) {
        rightAxisDomainStart += 0.12; // Incrementa a posição do próximo eixo à direita
      }

      yAxisCounter++; // Incrementa o contador de eixos
    });
    setPlotData(dataToPlot);
    setLayout(layoutConfig);
  };

  useEffect(() => {
    processData(data); 
  }, []);

  return (
    <div>
     <Header />
     <Plot
        data={plotData} 
        layout={layout} 
        config={{ responsive: true }} 
      />
    </div>
  );
}

export default Chart;