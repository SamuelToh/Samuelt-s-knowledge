$(function(){
    $('ul.tabs li:first').addClass('active');
    $('.demoStepContainer article').hide();
    $('.demoStepContainer article:first').show();

    $('ul.tabs li').on('click',function(){
        $('ul.tabs li').removeClass('active');
        $(this).addClass('active')
        $('.demoStepContainer article').hide();
        var activeTab = $(this).find('a').attr('href');
        $(activeTab).show();
        return false;
    });
});