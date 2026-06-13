import api from '../../../utils/api'

const getPublicCoursesService = () => {
  return api.get('/courses/public')
}

const getMyCoursesService = () => {
  return api.get('/courses')
}

const getCoursesService = getMyCoursesService

export {getPublicCoursesService, getMyCoursesService, getCoursesService}
