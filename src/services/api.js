export default {
  queryRouteList: '/routes',

  queryUserInfo: '/user',
  logoutUser: '/user/logout',
  loginUser: 'POST /user/login',

  queryUser: '/keys/:id',
  queryUserList: '/keys',
  updateUser: 'Patch /keys/:id',
  createUser: 'POST /keys',
  removeUser: 'DELETE /keys/:id',
  removeUserList: 'POST /keys/delete',

  queryDashboard: '/dashboard',
}
