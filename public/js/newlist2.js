
Pagination2 = (function() {
    var selectors = {
            container: '.bose-pagination2',
            pages: '.bose-pagination__page2',
            nextPage: '.js-pagination-next2',
            previousPage: '.js-pagination-previous2',
        },
        classes = {
            page: 'bose-pagination__page2',
            activePage: 'bose-pagination__page--active2',
            disabledNav: 'bose-pagination__nav--disabled2',
            nextPage: 'bose-pagination__nav2 bose-pagination__nav--next2 js-pagination-next2',
            previousPage: 'bose-pagination__nav2 bose-pagination__nav--previous2 js-pagination-previous2'
        },
        list,
        options,
        currentPage = 1,
        pages = 1;

    function init(id, optionz) {
        list = new List(id, optionz);
        options = optionz.bosePagination;
        pages = Math.ceil(list.size() / options.page) || 1;
        makePagination();
        update();
    }

    function update() {
        console.time('performance');
        filter();
        updateButtonStyles();
        console.timeEnd('performance');
    }

    function filter() {
        var index = -1;
        list.filter(function(item) {
            index++;
            return index >= ((currentPage-1) * options.page) && index < (((currentPage-1) * options.page) + options.page);
        });
    }

    function previous() {
        if (currentPage !== 1) {
            currentPage--;
            update();
        }
    }

    function next() {
        if (currentPage !== pages) {
            currentPage++;
            update();
        }
    }

    function openPage(page) {
        return function() {
            currentPage = page;
            update();
        };
    }

    function makePagination() {
        var $listContainer = $(list.listContainer),
            $container = $('<div class="bose-pagination2"></div>');

        $listContainer.append($container);

        for (var i = 1; i <= pages; i++) {
            $container.append(makeButton(i, openPage(i), classes.page));
        }

        if (pages > 1) {
            $container.prepend(makeButton('Anterior', previous, classes.previousPage));
            $container.append(makeButton('Siguiente', next, classes.nextPage));
        }
    }

    function makeButton(text, event, styleClass) {
        if (!styleClass) styleClass = '';
        var $button = $('<button class="' + styleClass + '">' + text + '</button>');

        $button.on('click', event);

        return $button;
    }

    function updateButtonStyles() {
        var $container = $(selectors.container),
            $pages = $container.find(selectors.pages),
            $previous = $container.find(selectors.previousPage),
            $next = $container.find(selectors.nextPage);

        $pages.removeClass(classes.activePage);
        $previous.removeClass(classes.disabledNav);
        $next.removeClass(classes.disabledNav);

        if (currentPage === 1) {
            $previous.addClass(classes.disabledNav);
        } else if (currentPage === pages) {
            $next.addClass(classes.disabledNav);
        }

        $pages.filter(function(i, element) {
            return $(element).text() === '' + currentPage;
        }).addClass(classes.activePage);
    }

    return {
        init: init
    };
}())


// Pagination.init('my-list', {
//     bosePagination: {
//         page: 1
//     }
// });