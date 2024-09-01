import React from 'react';
import { Container } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Recursion(props) {
    return (
        <Container fluid="true" className="text-dark">
            {/* Introduction to Recursion */}
            <h3 className="title mt-3">Introduction to Recursion</h3>
            <p className="globalDescription">
                Recursion একটি প্রোগ্রামিং কৌশল যেখানে একটি ফাংশন নিজেকে কল করে। এটি সমস্যাগুলির পুনরাবৃত্তি সমাধানের জন্য ব্যবহার করা হয়। একটি রিকার্সিভ ফাংশন সাধারণত একটি বেস কেস এবং একটি রিকার্সিভ কেস থাকে।
            </p>

            {/* Example 1: Factorial Calculation */}
            <h4 className="globalSubTitle">Example 1: Factorial Calculation</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    cout << "Factorial of 5: " << factorial(5) << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>factorial</code> ফাংশনটি একটি পূর্ণসংখ্যার ফ্যাক্টরিয়াল হিসাব করতে রিকার্সন ব্যবহার করা হয়েছে। <code>factorial(5)</code> কল করলে ফলস্বরূপ <code>120</code> হবে, কারণ <code>5 * 4 * 3 * 2 * 1</code>।
            </p>

            {/* Example 2: Fibonacci Series */}
            <h4 className="globalSubTitle">Example 2: Fibonacci Series</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    for (int i = 0; i < 10; i++) {
        cout << fibonacci(i) << " ";
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>fibonacci</code> ফাংশনটি ফিবোনাচ্চি সিকোয়েন্সের সদস্যদের হিসাব করতে রিকার্সন ব্যবহার করা হয়েছে। সিকোয়েন্স শুরু হয় <code>0, 1, 1, 2, 3, 5, 8, 13...</code>।
            </p>

            {/* Example 3: Sum of Array Elements */}
            <h4 className="globalSubTitle">Example 3: Sum of Array Elements</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

int sumArray(int arr[], int size) {
    if (size <= 0) return 0;
    return sumArray(arr, size - 1) + arr[size - 1];
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    cout << "Sum of array elements: " << sumArray(arr, 5) << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>sumArray</code> ফাংশনটি একটি অ্যারের উপাদানগুলির যোগফল হিসাব করতে রিকার্সন ব্যবহার করে। এখানে <code>arr[]</code> এর সকল উপাদানের যোগফল বের করা হয়েছে।
            </p>

            {/* Example 4: Reverse a String */}
            <h4 className="globalSubTitle">Example 4: Reverse a String</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

void reverseString(string str) {
    if (str.empty()) return;
    reverseString(str.substr(1));
    cout << str[0];
}

int main() {
    string str = "Recursion";
    reverseString(str);
    cout << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>reverseString</code> ফাংশনটি একটি স্ট্রিংকে রিকার্সিভভাবে উল্টে দেয়। <code>str.substr(1)</code> ব্যবহার করে স্ট্রিংটির প্রথম চরিত্র বাদ দিয়ে পুনরায় কল করা হয়।
            </p>

            {/* Example 5: Binary Search */}
            <h4 className="globalSubTitle">Example 5: Binary Search</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

int binarySearch(int arr[], int left, int right, int target) {
    if (left > right) return -1;
    int mid = left + (right - left) / 2;

    if (arr[mid] == target) return mid;
    if (arr[mid] > target) return binarySearch(arr, left, mid - 1, target);
    return binarySearch(arr, mid + 1, right, target);
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int target = 5;
    int result = binarySearch(arr, 0, 8, target);
    cout << "Element found at index: " << result << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>binarySearch</code> ফাংশনটি একটি সাজানো অ্যারেতে একটি উপাদান খুঁজে পেতে রিকার্সন ব্যবহার করে। এটি ডিভিড এন্ড কনকার কৌশল ব্যবহার করে।
            </p>

            {/* Example 6: Calculate Power */}
            <h4 className="globalSubTitle">Example 6: Calculate Power</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

int power(int base, int exp) {
    if (exp == 0) return 1;
    return base * power(base, exp - 1);
}

int main() {
    cout << "2^3 = " << power(2, 3) << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>power</code> ফাংশনটি একটি সংখ্যা এবং তার শক্তি রিকার্সিভভাবে হিসাব করে। এখানে <code>2^3</code> এর মান <code>8</code> হবে।
            </p>

            {/* Example 7: GCD (Greatest Common Divisor) */}
            <h4 className="globalSubTitle">Example 7: GCD (Greatest Common Divisor)</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

int main() {
    cout << "GCD of 48 and 18 is: " << gcd(48, 18) << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>gcd</code> ফাংশনটি দুইটি সংখ্যার গনিষ্ঠ সাধারণ গুণক (GCD) রিকার্সিভভাবে হিসাব করে। এখানে <code>48</code> এবং <code>18</code> এর GCD হবে <code>6</code>।
            </p>

            {/* Example 8: Print Natural Numbers */}
            <h4 className="globalSubTitle">Example 8: Print Natural Numbers</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

void printNaturalNumbers(int n) {
    if (n <= 0) return;
    printNaturalNumbers(n - 1);
    cout << n << " ";
}

int main() {
    printNaturalNumbers(5);
    cout << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>printNaturalNumbers</code> ফাংশনটি একটি প্রাকৃতিক সংখ্যা পর্যন্ত রিকার্সিভভাবে সংখ্যাগুলি প্রিন্ট করে। এখানে <code>5</code> পর্যন্ত সংখ্যা প্রিন্ট করা হবে।
            </p>

            {/* Example 9: Tower of Hanoi */}
            <h4 className="globalSubTitle">Example 9: Tower of Hanoi</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

void towerOfHanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        cout << "Move disk 1 from " << from << " to " << to << endl;
        return;
    }
    towerOfHanoi(n - 1, from, aux, to);
    cout << "Move disk " << n << " from " << from << " to " << to << endl;
    towerOfHanoi(n - 1, aux, to, from);
}

int main() {
    towerOfHanoi(3, 'A', 'C', 'B');
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>towerOfHanoi</code> ফাংশনটি টাওয়ার অফ হানয় সমস্যার সমাধান করতে রিকার্সন ব্যবহার করে। এখানে <code>3</code> টি ডিস্কের জন্য স্টেপগুলি প্রিন্ট করা হয়।
            </p>

            {/* Example 10: Sum of Digits */}
            <h4 className="globalSubTitle">Example 10: Sum of Digits</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

int sumOfDigits(int num) {
    if (num == 0) return 0;
    return num % 10 + sumOfDigits(num / 10);
}

int main() {
    cout << "Sum of digits of 1234: " << sumOfDigits(1234) << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>sumOfDigits</code> ফাংশনটি একটি সংখ্যার ডিজিটগুলির যোগফল রিকার্সিভভাবে হিসাব করে। এখানে <code>1234</code> সংখ্যার ডিজিটগুলির যোগফল <code>10</code> হবে।
            </p>

            {/* Example 11: Power Set */}
            <h4 className="globalSubTitle">Example 11: Power Set</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

void powerSet(string str, string current, int index) {
    if (index == str.size()) {
        cout << current << " ";
        return;
    }
    powerSet(str, current, index + 1);
    powerSet(str, current + str[index], index + 1);
}

int main() {
    string str = "abc";
    powerSet(str, "", 0);
    cout << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>powerSet</code> ফাংশনটি একটি স্ট্রিংয়ের সকল সম্ভাব্য উপসেট বের করতে রিকার্সন ব্যবহার করে। উদাহরণস্বরূপ, <code>"abc"</code> এর পাওয়ার সেট হবে <code>"", "a", "b", "c", "ab", "ac", "bc", "abc"</code>।
            </p>

            {/* Example 12: Permutations of a String */}
            <h4 className="globalSubTitle">Example 12: Permutations of a String</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

void permute(string str, int l, int r) {
    if (l == r) {
        cout << str << " ";
        return;
    }
    for (int i = l; i <= r; i++) {
        swap(str[l], str[i]);
        permute(str, l + 1, r);
        swap(str[l], str[i]); // backtrack
    }
}

int main() {
    string str = "abc";
    permute(str, 0, str.size() - 1);
    cout << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>permute</code> ফাংশনটি একটি স্ট্রিংয়ের সকল পারমুটেশন বের করতে রিকার্সন ব্যবহার করে। উদাহরণস্বরূপ, <code>"abc"</code> এর পারমুটেশন হবে <code>"abc", "acb", "bac", "bca", "cab", "cba"</code>।
            </p>

            {/* Example 13: Flatten Nested Lists */}
            <h4 className="globalSubTitle">Example 13: Flatten Nested Lists</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <vector>
using namespace std;

void flatten(vector<vector<int>>& nested, vector<int>& result, int index) {
    if (index == nested.size()) return;
    for (int num : nested[index]) {
        result.push_back(num);
    }
    flatten(nested, result, index + 1);
}

int main() {
    vector<vector<int>> nested = {{1, 2}, {3, 4}, {5, 6}};
    vector<int> result;
    flatten(nested, result, 0);
    for (int num : result) cout << num << " ";
    cout << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>flatten</code> ফাংশনটি নেস্টেড লিস্টগুলিকে একটি একক লিস্টে রিকার্সিভভাবে রূপান্তর করে। উদাহরণস্বরূপ, <code>{`{1, 2}, {3, 4}, {5, 6}`}</code> কে <code>{`{1, 2, 3, 4, 5, 6}`}</code> এ রূপান্তরিত করবে।
            </p>

            {/* Example 14: Generate All Subsets */}
            <h4 className="globalSubTitle">Example 14: Generate All Subsets</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

void generateSubsets(string str, string current, int index) {
    if (index == str.size()) {
        cout << current << " ";
        return;
    }
    generateSubsets(str, current, index + 1);
    generateSubsets(str, current + str[index], index + 1);
}

int main() {
    string str = "xyz";
    generateSubsets(str, "", 0);
    cout << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>generateSubsets</code> ফাংশনটি একটি স্ট্রিংয়ের সকল সম্ভাব্য উপসেট বের করতে রিকার্সন ব্যবহার করে। উদাহরণস্বরূপ, <code>"xyz"</code> এর উপসেট হবে <code>"", "x", "y", "z", "xy", "xz", "yz", "xyz"</code>।
            </p>

            {/* Example 15: Merge Sort */}
            <h4 className="globalSubTitle">Example 15: Merge Sort</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    int* L = new int[n1];
    int* R = new int[n2];

    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }

    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];

    delete[] L;
    delete[] R;
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;

        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6, 7};
    int arr_size = sizeof(arr) / sizeof(arr[0]);

    mergeSort(arr, 0, arr_size - 1);

    cout << "Sorted array: ";
    for (int i = 0; i < arr_size; i++) cout << arr[i] << " ";
    cout << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>mergeSort</code> ফাংশনটি একটি অ্যারেকে মের্জ সোর্ড অ্যালগরিদম ব্যবহার করে সাজাতে রিকার্সন ব্যবহার করে। এটি অ্যারেটিকে ছোট ছোট অংশে ভাগ করে এবং সেগুলিকে সাজিয়ে একত্রিত করে।
            </p>

            {/* Example 16: Quick Sort */}
            <h4 className="globalSubTitle">Example 16: Quick Sort</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }

    swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int arr_size = sizeof(arr) / sizeof(arr[0]);

    quickSort(arr, 0, arr_size - 1);

    cout << "Sorted array: ";
    for (int i = 0; i < arr_size; i++) cout << arr[i] << " ";
    cout << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>quickSort</code> ফাংশনটি একটি অ্যারেকে কুইক সোর্ড অ্যালগরিদম ব্যবহার করে সাজাতে রিকার্সন ব্যবহার করে। এটি একটি পিভট উপাদান নির্বাচন করে এবং কমপক্ষে এবং বেশী উপাদানগুলির সাথে বিভক্ত করে।
            </p>

            {/* Example 17: Count Ways to Climb Stairs */}
            <h4 className="globalSubTitle">Example 17: Count Ways to Climb Stairs</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

int countWays(int n) {
    if (n <= 1) return 1;
    return countWays(n - 1) + countWays(n - 2);
}

int main() {
    int n = 5;
    cout << "Number of ways to climb " << n << " stairs: " << countWays(n) << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>countWays</code> ফাংশনটি সিঁড়ি উঠতে সম্ভাব্য উপায়গুলি গননা করতে রিকার্সন ব্যবহার করে। উদাহরণস্বরূপ, <code>5</code> ধাপের জন্য সংখ্যা হবে <code>8</code>।
            </p>

            {/* Example 18: Maximum Depth of Binary Tree */}
            <h4 className="globalSubTitle">Example 18: Maximum Depth of Binary Tree</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

int maxDepth(TreeNode* root) {
    if (root == nullptr) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}

int main() {
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);

    cout << "Maximum depth of binary tree: " << maxDepth(root) << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>maxDepth</code> ফাংশনটি একটি বাইনারি ট্রি-এর সর্বাধিক গভীরতা গননা করতে রিকার্সন ব্যবহার করে। উদাহরণস্বরূপ, একটি ট্রি যার গভীরতা <code>3</code>।
            </p>

            {/* Example 19: Sum of Elements in a Linked List */}
            <h4 className="globalSubTitle">Example 19: Sum of Elements in a Linked List</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

int sumList(ListNode* head) {
    if (head == nullptr) return 0;
    return head->val + sumList(head->next);
}

int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);

    cout << "Sum of elements in linked list: " << sumList(head) << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>sumList</code> ফাংশনটি একটি লিঙ্কড লিস্টের উপাদানগুলির যোগফল গননা করতে রিকার্সন ব্যবহার করে। উদাহরণস্বরূপ, লিস্ট <code>1 -> 2 -> 3</code> এর যোগফল হবে <code>6</code>।
            </p>

            {/* Example 20: Convert Decimal to Binary */}
            <h4 className="globalSubTitle">Example 20: Convert Decimal to Binary</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

void decimalToBinary(int n) {
    if (n == 0) return;
    decimalToBinary(n / 2);
    cout << n % 2;
}

int main() {
    int n = 10;
    cout << "Binary representation of " << n << " is: ";
    decimalToBinary(n);
    cout << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>decimalToBinary</code> ফাংশনটি একটি দশমিক সংখ্যাকে বাইনারি সংখ্যায় রিকার্সিভভাবে রূপান্তর করে। উদাহরণস্বরূপ, <code>10</code> এর বাইনারি রূপ হবে <code>1010</code>।
            </p>

        </Container>
    );
}

export default Recursion;
