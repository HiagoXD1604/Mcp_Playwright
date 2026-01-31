# Text Box Test Plan

## Application Overview

This test plan covers the functionality of the Text Box form on the DemoQA website. The form allows users to enter their full name, email, current address, and permanent address, and upon submission, displays the entered information below the form.

## Test Scenarios

### 1. Text Box Form

**Seed:** `e2e/seed.spec.ts`

#### 1.1. Happy Path - Fill all fields and submit

**File:** `e2e/text-box-happy-path.spec.ts`

**Steps:**
  1. Fill the Full Name field with 'John Doe'
    - expect: The Full Name field accepts the input
  2. Fill the Email field with 'john.doe@example.com'
    - expect: The Email field accepts the input
  3. Fill the Current Address field with '123 Main St, City, State'
    - expect: The Current Address field accepts the input
  4. Fill the Permanent Address field with '456 Elm St, City, State'
    - expect: The Permanent Address field accepts the input
  5. Click the Submit button
    - expect: The output section displays the entered name, email, current address, and permanent address correctly

#### 1.2. Submit with empty fields

**File:** `e2e/text-box-empty-submit.spec.ts`

**Steps:**
  1. Click the Submit button without filling any fields
    - expect: The output section displays empty values for all fields

#### 1.3. Invalid email format

**File:** `e2e/text-box-invalid-email.spec.ts`

**Steps:**
  1. Fill the Full Name field with 'Jane Smith'
    - expect: The Full Name field accepts the input
  2. Fill the Email field with 'invalid-email'
    - expect: The Email field accepts the input (no client-side validation)
  3. Fill the Current Address field with 'Address 1'
    - expect: The Current Address field accepts the input
  4. Fill the Permanent Address field with 'Address 2'
    - expect: The Permanent Address field accepts the input
  5. Click the Submit button
    - expect: The output section displays the entered data, including the invalid email

#### 1.4. Long text in address fields

**File:** `e2e/text-box-long-text.spec.ts`

**Steps:**
  1. Fill the Full Name field with 'Very Long Name Here'
    - expect: The Full Name field accepts the input
  2. Fill the Email field with 'long.email@domain.com'
    - expect: The Email field accepts the input
  3. Fill the Current Address field with a long text (e.g., 500 characters)
    - expect: The Current Address field accepts the long input
  4. Fill the Permanent Address field with a long text
    - expect: The Permanent Address field accepts the long input
  5. Click the Submit button
    - expect: The output section displays all the entered long text correctly

#### 1.5. Special characters in fields

**File:** `e2e/text-box-special-chars.spec.ts`

**Steps:**
  1. Fill the Full Name field with 'Name with @#$%'
    - expect: The Full Name field accepts the input
  2. Fill the Email field with 'test@special.com'
    - expect: The Email field accepts the input
  3. Fill the Current Address field with 'Address with &*()'
    - expect: The Current Address field accepts the input
  4. Fill the Permanent Address field with 'Another address <>'
    - expect: The Permanent Address field accepts the input
  5. Click the Submit button
    - expect: The output section displays the special characters correctly
