import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  chart = new Chart({
    title: {
        text: 'Real x Orçado'
    },
    yAxis: {
        title: {
            text: 'R$ MM'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
        series: {
            
            pointStart: 2010
        }
    },

    series: [{
        name: 'Real',
        data: [100, 200, 300, 496, 470, 119, 137, 154, 270, 119, 137, 151, 300, 396, 470, 119]
    }, {
        name: 'Orçado',
        data: [249, 240, 297, 298, 324, 302, 381, 404, 249, 240, 297, 298, 297, 298, 324, 302]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

  });
 
  ngOnInit() {

  }

}
