

    document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', () => {
                const answer = item.nextElementSibling;
                if (answer.style.display === 'inline-block') {
                    answer.style.transition = '500ms'
                    answer.style.display = 'none';
                } else {
                    answer.style.opacity = '100%'
                    answer.style.transition = '500ms'
                    answer.style.display = 'inline-block';
                }
            });
        });
        
        
        
        const header = document.querySelector('.headerTab');
            let img2 = document.getElementById("image2");
            let img1 = document.getElementById("image1");
        
            window.addEventListener("scroll", function(){
        
        let scroll = window.scrollY
        const translateYforImage2 = scroll * 0.25;
        const translateYforImage1 = scroll * -0.35;
        
        img2.style.transform = `translate(0%, calc(${translateYforImage2}px))`
        img1.style.transform = `translate(0%, calc(${translateYforImage1}px))`
        
        })
        
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            let scrollTop = window.scrollY;
            
            
            if (scrollTop < lastScrollTop) {
                header.classList.remove('hidden');
            } else {
                header.classList.add('hidden');
            }
            lastScrollTop = scrollTop;
        });
