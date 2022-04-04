import React from 'react'
import { GiAtSea } from "react-icons/gi";
import { GiSeaTurtle } from "react-icons/gi";
import { GiSeahorse } from "react-icons/gi";
import './programs.css'

function Programs() {
        function helloClass(){
                alert("Hello class! THis is my Portfolio webpage!");
        }

        function Random() {
                var maxNumber = 45;
                var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
                alert("You're lucky number is:" + " " + randomNumber);
        }

        function helloStudent(){
                var sName = window.prompt('Enter your name: ');
                alert("Hello " + sName + "!" + " Thank you for visiting my website!");
        }

        // function phpHelloMessage(){
        //         <?php 
        //            echo("Hello World!")
        //         ?>
        // }

  return (
    <div className='sea-icons'>
        <div className='buttons'>
                <div>
                        Click these buttons to run Javascript programs!
                </div>
                <button onClick={helloClass} className='seaturtle-button'>
                        <GiSeaTurtle/>
                </button>
                        
                <button onClick={Random}>
                        <GiSeahorse/>
                </button>

                <button onClick={helloStudent}>
                        <GiAtSea/>
                </button>
        </div>
     
    </div>
  )
}

export default Programs

