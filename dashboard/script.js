$(document).ready(function ()
{
    $(".dep-wrap").click(function ()
    {
        $(".dep-wrap-info").hide();

        $(this).find(".dep-wrap-info").show();
    });

    $(document).click(function (event)
    {
        if (!$(event.target).closest('.dep-wrap, .dep-wrap-info').length)
        {
            $(".dep-wrap-info").hide();
        }
    });
});