import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 

      
  }
  ngOnInit(): void {
    let carouselOffset = $('.ourservices').offset();
    /*$(document).scroll(()=>{
      let element = $('.navbar ul li');
      let elementII = $('.navbar a');
      if (scrollY<=carouselOffset.top) {
        $('.navbar').css('background-color','rgb(29,28,28,.3)')
        $('.navbar a').css({'color':' rgb(212, 175, 55)'})

      }
      else{
        $('.navbar').css({'background-color':'rgb(209, 174, 69)'});        
        $('.navbar a').css({'color':'#212529'})
        if(element.hasClass('item')){
          element.removeClass('item');
          element.addClass('itemII');          
          if($('.navbar a').hasClass('active-item')){
            $('.navbar a').removeClass('active-item');
            $('.navbar a').addClass('active-itemII');
          }
        }

      }
    });*/
    let sliderOffset = $('.carousel').offset().top;
    let ourServicesOffset = $('.ourservices').offset().top;
    let aboutUsOffset =$('.aboutus').offset().top
    let projectsOffset = $('#projectsContainer').offset().top;
    let teamOffset = $('.team').offset().top;
    let partnersOffset = $('.partners').offset().top;   
    let whyKayanOffset = $('.whyKayan').offset().top;
    let contactUsOffset = $('.contact').offset().top;
   // console.log(ourServicesOffset);
    /*$(window).scroll(()=>{
      let scroll = scrollY;
      if(scroll>=sliderOffset){
        $('#navSlider').addClass('active-item') ;//add active class to the first;
        $('#navWhykayan').removeClass('active-item') ;
        $('#navServices').removeClass('active-item') ;
        $('#navAboutUs').removeClass('active-item') ;
        $('#navProjects').removeClass('active-item') ;
        $('#navPartners').removeClass('active-item') ;
        $('#navContactUs').removeClass('active-item') ;
        $('#navTeam').removeClass('active-item');
      }
      if (scroll>=ourServicesOffset){
        //console.log('offset'+scroll);
        $('#navServices').addClass('active-item') ;//add active class to the first;
        $('#navWhykayan').removeClass('active-item') ;
        $('#navSlider').removeClass('active-item') ;
        $('#navAboutUs').removeClass('active-item') ;
        $('#navProjects').removeClass('active-item') ;
        $('#navPartners').removeClass('active-item') ;
        $('#navContactUs').removeClass('active-item') ;
        $('#navTeam').removeClass('active-item');

      }
      

      if (scroll>=aboutUsOffset) {
        $('#navAboutUs').addClass('active-item') ;//add active class to the first;
        $('#navWhykayan').removeClass('active-item') ;
        $('#navSlider').removeClass('active-item') ;
        $('#navServices').removeClass('active-item') ;
        $('#navProjects').removeClass('active-item') ;
        $('#navPartners').removeClass('active-item') ;
        $('#navContactUs').removeClass('active-item') ;
        $('#navTeam').removeClass('active-item');

      }
      
      if(scroll>=projectsOffset){
        $('#navProjects').addClass('active-item') //add active class to the first;
        $('#navWhykayan').removeClass('active-item') ;
        $('#navSlider').removeClass('active-item') ;
        $('#navServices').removeClass('active-item') ;
        $('#navAboutUs').removeClass('active-item') ;
        $('#navPartners').removeClass('active-item') ;
        $('#navContactUs').removeClass('active-item') ;
        $('#navTeam').removeClass('active-item');
      }
      if(scroll>=teamOffset){
        $('#navTeam').addClass('active-item') //add active class to the first;
        $('#navProjects').removeClass('active-item');
        $('#navWhykayan').removeClass('active-item') ;
        $('#navSlider').removeClass('active-item') ;
        $('#navServices').removeClass('active-item') ;
        $('#navAboutUs').removeClass('active-item') ;
        $('#navPartners').removeClass('active-item') ;
        $('#navContactUs').removeClass('active-item') ;
      }
      if(scroll>=partnersOffset){
        $('#navPartners').addClass('active-item');    
        $('#navProjects').removeClass('active-item');
        $('#navWhykayan').removeClass('active-item') ;
        $('#navSlider').removeClass('active-item') ;
        $('#navServices').removeClass('active-item') ;
        $('#navAboutUs').removeClass('active-item') ;
        $('#navContactUs').removeClass('active-item') ;
        $('#navTeam').removeClass('active-item');

      }
      if(scroll>=whyKayanOffset){
        $('#navWhykayan').addClass('active-item');    
        $('#navProjects').removeClass('active-item');
        $('#navPartners').removeClass('active-item') ;
        $('#navSlider').removeClass('active-item') ;
        $('#navServices').removeClass('active-item') ;
        $('#navAboutUs').removeClass('active-item') ;
        $('#navContactUs').removeClass('active-item') ;
        $('#navTeam').removeClass('active-item');
      }
      if(scroll>=contactUsOffset){
        $('#navContactUs').addClass('active-item');    
        $('#navProjects').removeClass('active-item');
        $('#navPartners').removeClass('active-item') ;
        $('#navSlider').removeClass('active-item') ;
        $('#navServices').removeClass('active-item') ;
        $('#navAboutUs').removeClass('active-item') ;
        $('#navWhykayan').removeClass('active-item') ;
        $('#navTeam').removeClass('active-item');
      }
     
      
    })*/
    $(window).scroll(()=>{
      let scroll = scrollY;
      if(scroll>=ourServicesOffset){
        
        $('.navbar').css({'background-color':'rgba(255,255,255,.9)'});   
        $('.navbar a').css({'color':'#212529'});

        $('.kayan-navbar-brand').hide('2',()=>{
        });
        $('.navbar').mouseover(()=>{
          $('.kayan-navbar-brand').show('2');
          //$('#navbarBrand img').addClass('w-50',1000);
          $('#navbarSupportedContent').addClass('mt-3');
        })
        $('.navbar').mouseleave(()=>{
          $('.kayan-navbar-brand').hide('2');
          //$('#navbarBrand img').addClass('w-50',1000);
          $('#navbarSupportedContent').removeClass('mt-3');

        })
        $('#navbarSupportedContent').removeClass('mt-5');

      }
      else{
        $('.kayan-navbar-brand').show('2');
        $('.navbar').css({'background-color':'rgba(0,0,0,.9)'});   
        $('.navbar a').css({'color':'#d1ae56'});
        $('.navbar-toggler-icon').css({'color':'#d1ae45'});
        //$('#navbarBrand img').removeClass('w-50',1000);
        $('#navbarSupportedContent').removeClass('mt-3');
        $('#navbarSupportedContent').addClass('mt-5');
        //$('.kayan-navbar-brand').show('2');
      }
    })
  }


}
