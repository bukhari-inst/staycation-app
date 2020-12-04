// untuk formatig number data di icon
export default (number) => {
  const formatNumbering = new Intl.NumberFormat('id-ID');
  return formatNumbering.format(number);
};
