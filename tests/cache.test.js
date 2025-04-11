const fs = require('fs');
const { 
  jsonToMap,
  mapToJson,
  saveCache,
  loadCache
} = require('../index');

describe('캐시 관리 기능', () => {
  const testData = new Map([
    ['user1', new Map([['prs', 5]])],
    ['user2', new Map([['issues', 3]])]
  ]);

  test('캐시 저장 및 로드', () => {
    saveCache(testData);
    const loaded = loadCache();
    expect(loaded.get('user1').get('prs')).toBe(5);
    expect(loaded.get('user2').get('issues')).toBe(3);
  });
});
