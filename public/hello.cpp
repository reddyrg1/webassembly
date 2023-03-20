typedef long int i32;

extern "C" {
    void caesarEncrypt(i32 *plaintext, i32 plaintextLength, i32 key) {
        for (int i = 0; i < plaintextLength; i++) {
            plaintext[i] = (plaintext[i] + key) % 26;
        }
  }
}