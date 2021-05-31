(function () {
    let url = '';
    const $ = document.body;
    const $anchors = Array.from($.querySelectorAll('a'));
    $anchors.forEach(function($anchor){
        $anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const $target = event.currentTarget;
            url = $target.href;
            Velocity(
                $,
                {
                    opacity: 0
                },
                {
                    duration: 600,
                    complete: function () {
                        location.href = url;
                    }
                }
            )
        })
    })
    
    Velocity(
        $,
        {
            opacity: 1
        },
        {
            duration: 600
        }
    )
})();