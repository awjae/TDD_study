1. 테스트를 통해 보다 안정적인 어플리케이션을 만들자.
2. 디버깅 시간 단축.
3. 이후 확장. 및 재설꼐 시간의 단축 등 구현에 더 용이하게 작용.

----------------------

1. package.json : 프로젝트의 전반적인 정보와 패키지들의 의존성을 볼 수 있는 파일

2. router, controller : 모든 요청을 server.js 에 관리하기엔 효율이 너무 떨어진다. (가독성)

3. mongo DB
![](https://i.imgur.com/MbiORxU.png)
![](https://i.imgur.com/L4d0kWj.png)

4. 단위 테스트의 조건
 - 독립적이여야한다.
 - 격리 되어야한다. ajax, axios, localStorage등 테스트 대사잉 의존하는 것을 다른 것으로 대체해야 합니다.

5. 단위 테스트의 이유
 - 프로그램이 크고 리소가 많이 들어가는 경우 실행시켜보기 어렵다. 개발자들은 유닛테스트를 만들어서 빠르게 자신의 코드가 정상적으로 작동하는지 확인 할 수 있다.
 - 종속성이 있는 클래스들이 버그가 나는 것을 방지하기 위해서

6. jest - Facebook testing framwork

7. describe : 그룹(관련된 테스트) 단위
    it : 테스트 단위
    expect <=> matcher : 