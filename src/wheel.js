import React, { Component } from 'react';
import d3 from 'd3';

const width = 420,
    height = 420,
    radius = width/2;

const data = [
    {label: "Dogs trust", value:45, class: 'spin_1'},
    {label: "CASJ", value:45, class: 'spin_2'},
    {label: "SOS", value:45, class: 'spin_3'},
    {label: "RSCPA", value:45, class: 'spin_4'},
    {label: "Hope for paws", value:45, class: 'spin_5'},
    {label: "ASPCA", value:45, class: 'spin_6'},
    {label: "Mercy for Animals", value:45, class: 'spin_7'},
    {label: "PETA", value:45, class: 'spin_8'}
];

let colors = [
    '#FFE773',
    '#FFBD7B',
    '#FFCED6',
    '#F6849C',
    '#9AECE0',
    '#ADB5F7',
    '#D6E75A',
    '#6ee527'
];

let pie = d3.layout.pie().value(function(d){return d.value;});

let arc = d3.svg.arc().outerRadius(radius);

export default class Wheel extends Component {
    constructor(props){
        super(props)
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount(){
        this.drawSvgContainer();
        this.spin = false;
    }

    render() {
        return (
            <div className="wheel-wrapper" id="wheel-wrapper" ref="wheel"/>
        );
    }

    spinWheel = () => {
        if(!this.spin){
            this.spin = true;
            let draw = Math.floor(Math.random() * 8);
            this.result = data[draw];
            d3.select('#wheel-wrapper').attr('class', 'wheel-wrapper ' + this.result.class);
        }
        setTimeout(() => {
            this.props.onSpinEnd(this.result.label);
        }, 4000)
    };

    drawSvgContainer = () => {
        this.svg = d3.select('#wheel-wrapper')
            .append("svg")
            .data([data])
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("class", "wheel-group")
            .attr("transform", "translate(210,210)")
            .on('click', this.spinWheel);

        this.arcs = this.svg.selectAll("g.slice").data(pie)
            .enter()
            .append("g")
            .attr("class", "slice");

        this.arcs.append("path")
            .attr("fill", function(d, i){return colors[i];})
            .attr("d", function (d) {return arc(d);});

        this.arcs.append("text")
            .attr("transform", function(d){
                d.innerRadius = 20;
                d.outerRadius = radius;
                return "translate(" + arc.centroid(d) + ")";}
            )
            .attr("text-anchor", "middle")
            .style({
                "font-size": "12px",
                "fill": "white"
            })
            .text( function(d, i) {return data[i].label;});

        this.arcs.append("circle")
            .attr("transform", function(d, i){
                d.innerRadius = 200;
                d.outerRadius = radius;
                return "translate(" + arc.centroid(d) + ")";}
            )
            .attr("r", "20")
            .attr("fill", function(d, i){return colors[i]});

        this.arcs.append("circle")
            .attr("transform", function(d, i){
                d.innerRadius = 202;
                d.outerRadius = radius;
                return "translate(" + arc.centroid(d) + ")";}
            )
            .attr("r", "15")
            .attr("fill", "#FFFFFF");
    }
}