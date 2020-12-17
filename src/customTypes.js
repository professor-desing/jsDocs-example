/**
 * User
 * @typedef {object} User
 * @property {number} id User Id
 * @property {string} name User's Name
 * @property {number|string} [age] User's age (Optional)
 * @property {boolean} isActive User state
 */

/**
 * A new user
 * @type {User}
 */

const user1 = {
    id: 1,
    name: 'npm',
    age: 30,
    isActive: true
}

/**
 * @type {User}
 */
const user2 = {
    id: 2,
    name: 'npx',
    age: "33",
    isActive: false
}