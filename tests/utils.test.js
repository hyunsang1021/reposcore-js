const { 
    jsonToMap, 
    mapToJson 
  } = require('../index'); // 메인 파일 경로 수정
  
  // Mock 데이터 정의
  const mockJsonData = {
    a: 1,
    b: { c: 2 },
    d: [3, 4]
  };
  
  const mockMapData = new Map([
    ['x', new Map([['y', 10]])],
    ['z', [5, 6]]
  ]);
  
  describe('JSON ↔ Map 변환 유틸리티', () => {
    test('jsonToMap: 객체를 Map으로 변환', () => {
      const result = jsonToMap(mockJsonData);
  
      // 검증
      expect(result.get('a')).toBe(1);
      expect(result.get('b') instanceof Map).toBe(true);
      expect(result.get('b').get('c')).toBe(2);
      expect(result.get('d')).toEqual([3, 4]);
    });
  
    test('mapToJson: Map을 객체로 변환', () => {
      const result = mapToJson(mockMapData);
  
      // 검증
      expect(result.x.y).toBe(10);
      expect(result.z).toEqual([5, 6]);
    });
  });