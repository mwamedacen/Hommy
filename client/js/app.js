//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


$(function(){
    new WOW().init();

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
    });

    if(window.matchMedia("(min-width: 900px)").matches){
        
        //Add slide effect only for sections
        $(".featurette > div.wow:nth-child(1)").addClass("slideInLeft");
        $(".featurette > div.wow:nth-child(2)").addClass("slideInRight");

        $(".call-to-action > h2").addClass("tada");
        $(".call-to-action > div.wow:nth-child(2)").addClass("bounceInRight");
        $(".call-to-action > div.wow:nth-child(3)").addClass("bounceInLeft");

    } else {

    }
});


angular.module('hommy-app', ['ngMaterial','angular-google-analytics'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('deep-orange');
})
.config(function(AnalyticsProvider) {
     AnalyticsProvider.setAccount('UA-63117322-1');
})
.controller('baseController', [
    '$scope',
    '$rootScope',
    '$http',
    '$mdDialog',
    'Analytics',
    function($scope, $rootScope, $http, $mdDialog, Analytics){

    $scope.showAlert = function(ev, store){
        Analytics.trackEvent(store, 'ok', 'ok');

        var alert = $mdDialog.alert({
            template :  '<md-dialog style="margin:auto;padding:15px">' +
            '<h1 class="title_color text-center" style="font-size:20px;">Hommy is still under construction</h1>'+
            '<h2 class="principal_color text-center" style="font-size:15px">it will be available at the begining of August 2015, thanks for waiting with this video</h2>' +
            '  <md-dialog-content><iframe width="500" height="315" src="https://www.youtube.com/embed/IG0n8SiTO_M" frameborder="0" allowfullscreen></iframe></md-dialog-content>' +
            '  <div class="md-actions">' +
            '    <md-button ng-click="closeDialog()" class="principal_color">' +
            '      Got it!' +
            '    </md-button>' +
            '  </div>' +
            '</md-dialog>',
            theme : 'altTheme',
            disableParentScroll : false,
            hasBackdrop : true,
            targetEvent : ev,
            controller : function($scope, $mdDialog){
                $scope.closeDialog = function(){
                    $mdDialog.hide();
                };
            }
        });

        $mdDialog.show(alert);
    };
}]);