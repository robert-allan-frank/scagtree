export default function() {
  this.transition(
    this.fromRoute('home'),
    this.toRoute('user'),
    this.useAndReverse('explode', {
      matchBy: 'data-profile-image',
      use: 'fly-to'
    })
  );
}
