# 재귀 함수의 깊이가 너무 깊어져서 스택 메모리를 초과하는 경우
def recursive_function(n):
    if n > 0:
        recursive_function(n - 1)
    else:
        pass

recursive_function(10000)

# 스택이 비어 있는 상태에서 pop() 연산을 호출하려 할 때
stack = []

try:
    stack.pop()
except IndexError as e:
    print("스택 언더플로우 발생:", e)

# 자료구조의 크기를 동적으로 조절
# try-except 구문을 사용하여 오류를 처리
# 테스트 -> 자료구조가 예상대로 동작하는지 확인