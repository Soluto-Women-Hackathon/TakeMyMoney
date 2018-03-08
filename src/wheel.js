import React, { Component } from 'react';
import d3 from 'd3';

const width = 400,
    height = 400,
    radius = width/2;

const data = [
    {label: "org 1", value:60},
    {label: "org 2", value:60},
    {label: "org 3", value:60},
    {label: "org 4", value:60},
    {label: "org 5", value:60},
    {label: "org 6", value:60}
];

var aColor = [
    'rgb(178, 55, 56)',
    'rgb(213, 69, 70)',
    'rgb(230, 125, 126)',
    'rgb(150, 45, 40)',
    'rgb(120, 30, 30)',
    'rgb(100, 20, 15)'
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
        this.drawSvgContainer()
    }

    render() {
        return (
            <div className="wheel-wrapper" id="wheel-wrapper" ref="wheel"/>
        );
    }

    drawSvgContainer = () => {
        this.svg = d3.select('#wheel-wrapper')
            .append("svg")
            .data([data])
            .attr("width", width + 40)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(220," + radius + ")");

        this.arcs = this.svg.selectAll("g.slice").data(pie)
            .enter()
            .append("g")
            .attr("class", "slice");

        this.arcs.append("path")
            .attr("fill", function(d, i){return aColor[i];})
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
            .attr("fill", function(d, i){return aColor[i]});

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