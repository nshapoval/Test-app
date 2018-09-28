export const selectProfile = state => ({
  isLoading: state.profile.get('isLoading'),
  user: state.profile.get('user').toObject(),
});