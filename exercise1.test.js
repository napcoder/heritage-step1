const exercise1 = require('./exercise1')

const loremGibson = `Lorem Gibson
Website filler text based on the works of William Gibson
Hit refresh for more verbiage
tower pistol weathered rebar vehicle decay numinous sensory nodality savant savant. faded lights saturation point soul-delay wonton soup ablative DIY engine shrine youtube sensory. meta- digital Legba soul-delay woman monofilament gang post- systema Shibuya sign. cyber- rebar decay decay man silent shrine apophenia camera table augmented reality. semiotics voodoo god augmented reality plastic tank-traps footage motion disposable corporation voodoo god receding.

tiger-team -ware vinyl sentient saturation point jeans free-market 3D-printed A.I. disposable nodal point. physical market -space boat long-chain hydrocarbons girl table dome post- computer silent. spook spook cardboard semiotics youtube modem convenience store boat semiotics spook modem. savant assault decay apophenia boy table shanty town DIY gang otaku cartel. saturation point soul-delay decay girl construct 8-bit paranoid refrigerator receding rain girl.

katana motion weathered military-grade stimulate saturation point smart- kanji j-pop denim tiger-team. warehouse into nodal point narrative neural media tower into pen neon savant. euro-pop bomb Shibuya augmented reality cyber- claymore mine media gang pistol tube tanto. nodality rifle Kowloon jeans car beef noodles film shanty town DIY engine rifle. office RAF market table media neon realism order-flow market drone spook.

receding bicycle -space singularity -space silent dolphin artisanal decay bicycle 8-bit. pen j-pop media long-chain hydrocarbons sign BASE jump hotdog nodality silent drone denim. voodoo god narrative saturation point tanto courier ablative Kowloon construct receding refrigerator euro-pop. plastic singularity receding marketing ablative tower computer woman computer savant dolphin. decay crypto- sensory singularity city faded construct tank-traps footage cardboard claymore mine.`.split(/\n|\s/)

describe('Exercise1', () => {
  describe('Valid inputs', () => {
    it('should return 0 when no repetitions are present', () => {
      expect(exercise1(['a', 'b', 'c'])).toBe(0)
    })

    it('should return 1 when 1 repetition is present', () => {
      expect(exercise1(['a', 'b', 'cc'])).toBe(1)
    })

    it('should handle not consecutive duplications', () => {
      expect(exercise1(['ABC', 'deef', 'hi', 'mnmn'])).toBe(2)
    })

    it('should count 1 multiple replication in same word', () => {
      expect(exercise1(['AABBCCDDDDD', '123', 'xyz', 'qwertt'])).toBe(2)
    })

    it('should handle number characters', () => {
      expect(exercise1(['123a', '1233', '11', 'tttttxxxxxzzzzz'])).toBe(3)
    })

    it('should handle empty array', () => {
      expect(exercise1([])).toBe(0)
    })

    it('should handle empty string arrays', () => {
      expect(exercise1(['', '', ''])).toBe(0)
    })

    it('should handle empty string mixed arrays', () => {
      expect(exercise1(['', 'aasd', ''])).toBe(1)
    })

    it('should handle special characters', () => {
      expect(exercise1(['qwe@@', 'asd', 'èée'])).toBe(1)
    })

    it('should handle escaped characters', () => {
      expect(exercise1(['\'\'', '\\\\sad', '+qwe°%'])).toBe(2)
    })

    it('should handle space as character', () => {
      expect(exercise1(['qw e@ ', 'as d', 'è é e'])).toBe(2)
    })

    it('should handle "\\n" as character', () => {
      expect(exercise1(['qw \ne@', 'as\n\nd', 'èée'])).toBe(1)
    })

    it('should handle long array', () => {
      expect(exercise1(loremGibson)).toBe(124)
    })
  })

  describe('Invalid inputs', () => {
    describe('Not array input', () => {
      it('should throw exception when no input', () => {
        expect(() => exercise1()).toThrow(/array/)
      })

      it('should throw exception when null input', () => {
        expect(() => exercise1(null)).toThrow(/array/)
      })

      it('should throw exception when number input', () => {
        expect(() => exercise1(123)).toThrow(/array/)
      })

      it('should throw exception when string input', () => {
        expect(() => exercise1('asd')).toThrow(/array/)
      })
    })
    describe('Not string in array input', () => {
      it('should throw exception when array of numbers', () => {
        expect(() => exercise1([123, 45])).toThrow(/string/)
      })
      it('should throw exception when array of arrays', () => {
        expect(() => exercise1([['asd', 'bbs'], ['qwe', 'romario']])).toThrow(/string/)
      })
      it('should throw exception when array with 0 number', () => {
        expect(() => exercise1(['qwe', 'romario', 0])).toThrow(/string/)
      })
      it('should throw expection for null arrays', () => {
        expect(() => exercise1([null, null])).toThrow(/string/)
      })
      it('should throw exception for null mixed arrays', () => {
        expect(() => exercise1([null, 'qweeemme', null, 'ooppa'])).toThrow(/string/)
      })

      it('should throw expection for undefined arrays', () => {
        expect(() => exercise1([undefined, undefined])).toThrow(/string/)
      })
      it('should throw exception for undefined mixed arrays', () => {
        expect(() => exercise1([undefined, 'qweeemme', undefined, 'ooppa'])).toThrow(/string/)
      })

      it('should throw exception for true boolean values array', () => {
        expect(() => exercise1([true, 'qweeemme', true, 'ooppa'])).toThrow(/string/)
      })

      it('should throw exception for false boolean values array', () => {
        expect(() => exercise1([false, 'qweeemme', false, 'ooppa'])).toThrow(/string/)
      })
    })
  })
})
