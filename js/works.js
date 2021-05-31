(function(){
    const $ = document.body;
    const $titles = Array.from($.querySelectorAll(".category li"));
    const $boxes = Array.from($.querySelectorAll(".works_box"));
    $titles.forEach(function ($title) {
        $title.addEventListener('click', function(event){
            const $target = event.currentTarget;
            const category = $target.dataset.category;
            $boxes.forEach(function($box){
                const isTarget = $box.dataset[category] === '1';
                if(isTarget || category === 'all'){
                    $box.style.display = 'block';
                } else {
                    $box.style.display = 'none';
                }					
            });

        })
        
    }

    )

})();