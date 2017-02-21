app
    .controller('PortfolioCtrl', PortfolioCtrl);

function PortfolioCtrl($scope, $state) {
    console.log('PortfolioCtrl');

    $scope.block = {
        type: 'image',
        data: 'https://pp.vk.me/c637628/v637628525/35e4e/aHJcz8uEdX8.jpg'
    };


    $scope.blocks = [
        {
            type: 'image',
            data: 'https://pp.vk.me/c637628/v637628525/35e40/NfbFS3A_zDM.jpg',
        },
        {
            type: 'image',
            data: 'https://pp.vk.me/c637628/v637628525/35e47/qfnK6ZE_4Eo.jpg',
        },
        {
            type: 'image',
            data: 'https://pp.vk.me/c637628/v637628525/35e4e/aHJcz8uEdX8.jpg',
        },
        {
            type: 'video',
            data: 'https://www.youtube.com/embed/bKHz7wOjb9w',
        }
    ];

    $scope.updateVariables = (...args) => {
        console.log('updateVariables(', ...args, ')');
        $scope.oneWay = 'HELLO-1';
        $scope.twoWay = 'HELLO-TWO';
    }
}