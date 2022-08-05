const exercise2Advanced = require('./exercise2-adv')

describe('Exercise2 Advanced', () => {
  describe('Invalid paths', () => {
    it('should reject 1 step paths', () => {
      expect(exercise2Advanced(['n'])).toBe(false)
    })
    it('should reject 9 steps paths', () => {
      expect(exercise2Advanced(['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's'])).toBe(false)
    })
    it('should reject 11 steps paths', () => {
      expect(exercise2Advanced(['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's', 's'])).toBe(false)
    })
    it('should reject 12 steps paths', () => {
      expect(exercise2Advanced(['n', 'n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's', 's'])).toBe(false)
    })
    it('should reject straight paths', () => {
      expect(exercise2Advanced(['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'])).toBe(false)
    })
    it('should reject false in/out paths', () => {
      expect(exercise2Advanced(['n', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n'])).toBe(false)
    })
    it('should reject in/out paths', () => {
      expect(exercise2Advanced(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(false)
      expect(exercise2Advanced(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'].reverse())).toBe(false)
      expect(exercise2Advanced(['e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w'])).toBe(false)
      expect(exercise2Advanced(['e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w'].reverse())).toBe(false)
    })
  })
  describe('Valid paths', () => {
    it('should accept straight and back paths', () => {
      expect(exercise2Advanced(['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's'])).toBe(true)
      expect(exercise2Advanced(['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's'].reverse())).toBe(true)
      expect(exercise2Advanced(['e', 'e', 'e', 'e', 'e', 'w', 'w', 'w', 'w', 'w'])).toBe(true)
      expect(exercise2Advanced(['e', 'e', 'e', 'e', 'e', 'w', 'w', 'w', 'w', 'w'].reverse())).toBe(true)
    })
    it('should accept circular path', () => {
      expect(exercise2Advanced(['n', 'n', 'e', 's', 's', 's', 's', 'w', 'n', 'n'])).toBe(true)
    })
  })
})
