import React, { Component } from 'react';
import d3 from 'd3';

const width = 420,
    height = 420,
    radius = width/2;

const data = [
    {label: "org1", value:45, class: 'spin_1'},
    {label: "org2", value:45, class: 'spin_2'},
    {label: "org3", value:45, class: 'spin_3'},
    {label: "org4", value:45, class: 'spin_4'},
    {label: "org5", value:45, class: 'spin_5'},
    {label: "org6", value:45, class: 'spin_6'},
    {label: "org7", value:45, class: 'spin_7'},
    {label: "org8", value:45, class: 'spin_8'}
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
    }

    render() {
        return (
            <div className="wheel-wrapper" id="wheel-wrapper" ref="wheel"/>
        );
    }

    spinWheel = () => {
        let draw = Math.floor(Math.random() * 8);
        this.result = data[draw];
        d3.select('#wheel-wrapper').attr('class', this.result.class);
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
                d.innerRadius = 100;
                d.outerRadius = radius;
                return "translate(" + arc.centroid(d) + ")";}
            )
            .attr("text-anchor", "middle")
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