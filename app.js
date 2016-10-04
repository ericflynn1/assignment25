let app = angular.module('BookRepositoryApp', []);

app.factory('bookService', function () {
    let books = [{
        title: 'Every Way to Skin a Cat',
        borrower: ''
    }, {
            title: 'How to Confuse a Murderous Robot',
            borrower: ''
        }, {
            title: 'just that bear scene from the revanant',
            borrower: ''
        }, {
            title: 'A gif of Jar Jar Binks Dancing',
            barrower: ''
        }, {
            title: 'Godzilla Anthology',
            borrower: ''
        }, {
            title: 'Microwave Cooking for One',
            borrower: ''
        }

    ];
       return {
        borrow: function(bookTitle, name){
            for (let i = 0; i < books.length; i++) {
                if (books[i].title === bookTitle) {
                    books[i].borrower = name;
                }
            }
        },
        // Scott helped with this
        getBooks: function() {
            return books;
        },

        listBorrowed: function(user) {
            let newArray = [];
            for (let i = 0; i < books.length; i++) {
                if (user === books[i].borrower) {
                    newArray.push(books[i]);
                }
            }
            return newArray;
        },
    }
});

app.controller("bookController", function($scope, bookService) {
    $scope.books = bookService.getBooks();
    $scope.borrowTheBook = function(selected) {
        bookService.borrow(selected, $scope.user);
    }
});

app.controller("userSearch", function($scope, bookService) {
    $scope.books = [];
    $scope.search = function() {
       $scope.books = bookService.listBorrowed($scope.person);
    }
});