this.setState(state => {
const list = state.arrcolor.map((item) => {
// if (item.id === i) {
// return {...item, age:item.age+1}
// } else {
// return item;
// }
console.log(item);
});

return {
list,
};
});