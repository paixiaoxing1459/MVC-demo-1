import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')

$square.on('click', () => {
    //toggleClass 没有就加上，有就删掉 
    $square.toggleClass('active')
})