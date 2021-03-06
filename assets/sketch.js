var results = [
    {
    study:'chefs',
    words: "Using photographs of the 25 highest and 25 lowest ranked Fortune 1000 companies, researchers asked participants to make personality judgements and examined whether these judgements related to measuring the financial success of these companies.  These findings of the original study suggest that naive judgements may provide a more accurate assessment of an individual than well-informed judgments can.",
    originaltitle: 'The face of success: inferences from chief executive officers\' appearance predict company profits.',
    valuesOrig: {
        effectsize: 0.3, 
        N: 50, 
        pvalue: 0.05, 
        receffect: 0.3, 
        ttest: 0.3},
    valuesRep : {
        effectsize: 0.27, 
        N: 50, 
        pvalue: 0.0086, 
        receffect: 0.27, 
        ttest: 0.27}
    },
    {
    study:'views', 
    words: "The original authors of this study examined where participants looked when witnessing offensive behavior.  Undergraduate participants watched a video of four men (three white and one black) discuss university admissions. When one of the White discussants criticized affirmative action, the researchers manipulated whether or not the participants believed the Black discussant heard what was being said.  The original findings determined that a member of a relevant minority group attracted attention during potentially offensive comments.  Participants, however, showed little interest in the Black bystander when they believed that he could not hear what was being said.",
    originaltitle: 'Where do we look during potentially offensive behavior?',
    valuesOrig: {
        effectsize: 0.18, 
        N: 25, 
        pvalue: 0.003, 
        receffect: 0.247, 
        ttest: 5.15},
    valuesRep : {
        effectsize: 0.0476, 
        N: 30, 
        pvalue: 0.254, 
        receffect: 0.247, 
        ttest: 1.41}
    },
    {
    study:'sexdif',
    words: "In this study, the researchers studied sex differences in speed dating and used follow up questionnaires after the event to determine if there were sex differences in association with the partner's attractiveness and income.  The researchers found no sex differences, and the ideal preferences of the participants assessed prior to the event did not predict the outcome of the speed dating activity.",
    originaltitle: 'Sex differences in mate preferences revisited: Do people know what they initially desire in a romantic partner?',
    valuesOrig: {
        effectsize: 0.04, 
        N: 163, 
        pvalue: 0.48, 
        receffect: 0.14, 
        ttest: 0.72},
    valuesRep : {
        effectsize: 0.01, 
        N: 304, 
        pvalue: 0.87, 
        receffect: 0.029, 
        ttest: 0.15}
    },
];

var s0 = d3.scaleLinear().domain([0, 0.3]).range([0, 150]);
var s1 = d3.scaleLinear().domain([0, 304]).range([0, 150]);
var s2 = d3.scaleLinear().domain([0, 0.87]).range([150, 0]);
var s3 = d3.scaleLinear().domain([0, 0.3]).range([0, 150]);
var s4 = d3.scaleLinear().domain([0, 5.15]).range([0, 150]);

var base = d3
.select('.viz')
.selectAll('div.graphs')
.data(results)
.enter()
.append('div')
.attr('class', 'title')
.attr('id', function(d){return d.study})
.text(function(d) {return d.originaltitle})
.append('div')
.attr('class', 'graphcontainer')
;

var graphic = base
.append('svg')
.attr('class', 'box')
.attr('width', '400px')
.attr('height', '300px')
.attr('id', function(d) {return d.study})
.style('background-color', 'white')
;

graphic
.each(function(d,i){
    
     d3.select('#' + d.study)
    .on('mouseover', function(d){
        d3.select('#' + d.study + 'd')
        .style('display', 'flex')
        ;
    }
    )
    .on('mouseout', function(d){
        d3.select('#' + d.study + 'd')
        .style('display', 'none')
        ;
    }
    )
    ;

    d3.select(this)
    .on('mouseover', function(d){
        d3.select('#' + d.study + 'd')
        .style('display', 'flex')
        ;
    }
    )
    .on('mouseout', function(d){
        d3.select('#' + d.study + 'd')
        .style('display', 'none')
        ;
    }
    )
    ;

    d3.select(this)
    .append('circle')
    .attr('cx', '200px')
    .attr('cy', '150px')
    .attr('r', '150px')
    .attr('fill', 'rgba(0,0,0,0)')
    .attr('stroke', 'lightgrey')
    .attr('stroke-dasharray', '5,5')
    ;
    
    d3.select(this)
    .append('circle')
    .attr('cx', '200px')
    .attr('cy', '150px')
    .attr('r', '112px')
    .attr('fill', 'rgba(0,0,0,0)')
    .attr('stroke', 'lightgrey')
    .attr('stroke-dasharray', '5,5')
    ;
    
    d3.select(this)
    .append('circle')
    .attr('cx', '200px')
    .attr('cy', '150px')
    .attr('r', '75px')
    .attr('fill', 'rgba(0,0,0,0)')
    .attr('stroke', 'lightgrey')
    .attr('stroke-dasharray', '5,5')
    ;
    
    d3.select(this)
    .append('circle')
    .attr('cx', '200px')
    .attr('cy', '150px')
    .attr('r', '37px')
    .attr('fill', 'rgba(0,0,0,0)')
    .attr('stroke', 'lightgrey')
    .attr('stroke-dasharray', '5,5')
    ;
    
    var star = d3.select(this)
    .append('g')
    .style('transform','rotate(180deg)')
    .style('transform-origin', '50% 50%')
    ;
    
    //original stars
    for (var k = 0; k<5; k++){
        var starOrig = star
        .attr('class', 'valuesOrig');
        
        var findValue = d3.entries(d.valuesOrig);
        
        var g2 = starOrig
        .append('g')
        .style('transform', 'rotate(' + k*72 + 'deg)')
        .style('transform-origin', '50% 50%')
        .attr('class', findValue[k].key);
        
        g2
        .append('rect')
        .attr('width', '10px')
        .attr('height', function(){
            
            console.log(findValue[0]);
            console.log(findValue[0].key);
            console.log(findValue[0].value);
            
            if (findValue[k].key==='effectsize')
            return s0(findValue[k].value) + 'px';
            else if (findValue[k].key==='N')
            return s1(findValue[k].value) + 'px';
            else if (findValue[k].key==='pvalue')
            return s2(findValue[k].value) + 'px';
            else if (findValue[k].key==='receffect')
            return s3(findValue[k].value) + 'px';
            else return s4(findValue[k].value) + 'px';
            
        })
        .attr('rx', '5px')
        .attr('ry', '5px')
        .attr('x', '195px')
        .attr('y', '145px')
        .attr('fill', function(){
            
            console.log(findValue[0]);
            console.log(findValue[0].key);
            console.log(findValue[0].value);
            
            if (findValue[k].key==='effectsize')
            return 'rgb(255, 199, 80)';
            else if (findValue[k].key==='N')
            return 'rgb(255, 140, 80)';
            else if (findValue[k].key==='pvalue')
            return 'rgb(255, 29, 52)';
            else if (findValue[k].key==='receffect')
            return 'rgb(92, 218, 204)';
            else return 'rgb(0, 128, 142)';
            
        })
        .attr('opacity', '1')
        ;
    }
    //replication stars
    for (var k = 0; k<5; k++){
        var starRep = star
        .attr('class', 'valuesRep');

        var findRep = d3.entries(d.valuesRep);
        
        var g1 = starRep
        .append('g')
        .style('transform', 'rotate(' + k*72 + 'deg)')
        .style('transform-origin', '50% 50%')
        .attr('class', findRep[k].key);
        
        g1
        .append('rect')
        .attr('width', '2px')
        .attr('height', function(){
            
            console.log(findRep[0]);
            console.log(findRep[0].key);
            console.log(findRep[0].value);
            
        
            if (findRep[k].key==='effectsize')
            return s0(findRep[k].value) + 'px';
            else if (findRep[k].key==='N')
            return s1(findRep[k].value) + 'px';
            else if (findRep[k].key==='pvalue')
            return s2(findRep[k].value) + 'px';
            else if (findRep[k].key==='receffect')
            return s3(findRep[k].value) + 'px';
            else return s4(findRep[k].value) + 'px';
            
        })
        .attr('rx', '1px')
        .attr('ry', '1px')
        .attr('x', '199px')
        .attr('y', '149px')
        .attr('fill', function(){

            if (findRep[k].key==='effectsize')
            return 'rgb(0, 0, 0)';
            else if (findRep[k].key==='N')
            return 'rgb(0, 0, 0)';
            else if (findRep[k].key==='pvalue')
            return 'rgb(0, 0, 0)';
            else if (findRep[k].key==='receffect')
            return 'rgb(0, 0, 0)';
            else return 'rgb(0, 0, 0)';
            
        })
        .attr('opacity', '0.3')
        ;
    }

})
;

base
.append('div')
.attr('class', 'descript')
.attr('id', function(d){return d.study + 'd'})
.html(function(d) {return '<p>' + d.words + '</p>'})
;