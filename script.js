/************** Code for Hamburger menu */

const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click' , () => {
navbar.classList.toggle('change');

});
   

$(function(){
 
   $('.featured-item').click(function(){

    const value = $(this).attr('data-filter');
    if(value == 'all') {
        $('.card').show('1000');
    }else{
        $('.card').not('.' +value).hide('1000');
        $('.card').filter('.'+value).show('1000');
    }
   });
     /************* for class active */
     $('.featured-item').click(function(){
        
$(this).addClass('active').siblings().removeClass('active');
     });

    });
     


