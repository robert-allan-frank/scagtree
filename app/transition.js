export default function() {
  this.transition(
    this.fromRoute('home'),
    this.toRoute('profile'),
    this.useAndReverse('explode', {
      matchBy: 'data-profile-image',
      use: 'fly-to'
    })
  );
}
