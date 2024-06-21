document.getElementById('search-button').addEventListener('click', function() {
    
    var query = document.getElementById('search-box').value.trim().toLowerCase();
    
    var searchTerms = {
        'моторные масла': 'maslo.html',
        '5w': 'maslo.html',
        'масло': 'maslo.html',
        'двигатель': 'dvigatel.html',
        'запчасти': 'dvigatel.html',
        'свечи': 'dvigatel.html',
        'двс': 'dvigatel.html',
        'тормозная система': 'tormozsystem.html',
        'тормоза': 'tormozsystem.html',
        'колодки': 'tormozsystem.html',
        'подвеска': 'podveska.html',
        'автохимия': 'rasxodniki.html',
        'расходники': 'rasxodniki.html',
    };

    for (var term in searchTerms) {
        if (query.includes(term) || term.includes(query)) {
            
            window.location.href = searchTerms[term];
            return;
        }
    }

    alert('Товар не найден. Попробуйте другой запрос.');
});
