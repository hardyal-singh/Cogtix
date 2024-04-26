# Recursive method
def factorial_recursive(n):
    if n == 0:
        return 1
    else:
        return n * factorial_recursive(n-1)

# Iterative approach
def factorial_iterative(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result


print(factorial_recursive(6))  # Output: 720
print(factorial_iterative(6))  # Output: 720
