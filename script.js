function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var content = document.querySelector('.content');

  sidebar.classList.toggle('open');
  content.classList.toggle('shrink');
}
