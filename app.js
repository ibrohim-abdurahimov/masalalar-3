{
    // masala-51

    // function findMiddleNumber(arr) {
    //     let length = arr.length;
    //     if (length % 2 !== 0) {
    //         return arr[Math.floor(length / 2)];
    //     } else {
    //         let midIndex = length / 2;
    //         return (arr[midIndex - 1] + arr[midIndex]) / 2;
    //     }
    // }
    // console.log(findMiddleNumber([1, 2, 3, 4, 5]));
}
{
    // masala-52
    // let products = [
    //     {id: 6, name: "Smartphone", price: 12000, rating: 4.5, discount: 20},
    //     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
    //     {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
    //     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
    // ];
      
    // let filterProducts = products.filter(product => product.id !== 4);
      
    // console.log(filterProducts);
      
}
{
    // masala-53

    // function isAlphabetic(str) {
    //     return str.split('').every(char => char.toLowerCase() !== char.toUpperCase());
    // }
      
    // console.log(isAlphabetic("Test")); 
    // console.log(isAlphabetic("5Test!")); 
      
}
{
    // masala-54
    // const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

    // const count = {};
    // animals.forEach(animal => {
    // count[animal] = (count[animal] || 0) + 1;
    // });

    // console.log(count);

}
{
    // masala-55

    // const input = "Hello world";
    // const wordLengths = input.split(' ').map(word => word.length);
    // console.log(wordLengths);

}
{
    // masala-56

    // const input = "salom dunyo";
    // const Space = input.split('').some(char => char === ' ');
    // console.log(Space);
}
{
    // masala-57

    // const obj = {a: 2, b: 5, c: 7};
    // const result = Object.entries(obj).map(([key, value]) => key + value);
    // console.log(result);

}
{
    // masala-59
    // var findMidArrays = function(nums1, nums2) {
    //     let array = nums1.concat(nums2);
    //     array.sort((a, b) => a - b);
    //     let len = array.length;
    //     if (len % 2 !== 0) {
    //         return array[Math.floor(len / 2)];
    //     } else {
    //         let mid1 = array[len / 2 - 1];
    //         let mid2 = array[len / 2];
    //         return (mid1 + mid2) / 2;
    //     }
    // };
    
    // let nums1 = [1, 2];
    // let nums2 = [3, 4];
    
    // console.log(findMidArrays(nums1, nums2));
}