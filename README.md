# Component Library

## Atoms

#### button 🗂️

```jsx
<Button
  variant="contained"
  size="small"
  disabled={false}
  onClick={() => console.log('clicked')}
>
```

#### icon 🗂️

```jsx
<Icon
  name="add"
  size="small"
  onClick={() => console.log('clicked')}
/>
```

#### collapsible ? 🗂️

```jsx
<Collapsible
  title="Collapsible Title"
  open={true}
  onToggle={() => console.log('toggled')}
>
  <p>Collapsible Content</p>
</Collapsible>
```

#### divider 🗂️

```jsx
<Divider />
```

#### checkbox 🗂️

```jsx
<Checkbox
  label="Checkbox"
  checked={true}
  onChange={() => console.log('changed')}
/>
```

#### date picker 🗂️

```jsx
  <DatePicker
    label="Date Picker"
    value={new Date()}
    onChange={(date) => console.log(date)}
  />
```

#### radio 🗂️

```jsx
<Radio
  label="Radio"
  checked={true}
  onChange={() => console.log('changed')}
/>
```

#### toggles and switches 🗂️

```jsx
<Toggle
  label="Toggle"
  checked={true}
  onChange={() => console.log('changed')}
/>
```

#### input 🗂️

```jsx
<Input
  label="Input"
  value="Input Value"
  onChange={(value) => console.log(value)}
/>
```

#### search 🗂️

```jsx
  <Search
    label="Search"
    value="Search Value"
    onChange={(value) => console.log(value)}
/>
```

#### file upload 🗂️

```jsx
  <FileUpload
    label="File Upload"
    onChange={(file) => console.log(file)}
  />
```

#### sliders 🗂️

```jsx
  <Slider
    label="Slider"
    value={50}
    onChange={(value) => console.log(value)}
  />
```

#### time picker 🗂️

```jsx
  <TimePicker
    label="Time Picker"
    value={new Date()}
    onChange={(date) => console.log(date)}
  />
```

#### loading indicator 🗂️

  ```jsx
    <LoadingIndicator />
  ```

#### Link 🗂️

  ```jsx
    <Link
      href="https://www.google.com"
      target="_blank"
    >
      Google
    </Link>
  ```

#### list item 🗂️

  ```jsx
      <ListItem>Item 1</ListItem>
  ```

#### Image 🗂️

## Molecules

#### accordion-item 🗂️

#### menu 🗂️

<!-- Need to spend some time for this -->

#### avatar 🗂️

```jsx
<Avatar
  src="https://www.w3schools.com/howto/img_avatar.png"
  icon="add"
  alt="Avatar"
```

#### badge 🗂️

```jsx
  <Badge
    content="1"
    color="primary"
  />
```

#### floating action button 🗂️

```jsx
  <FAB
    icon="add"
    onClick={() => console.log('clicked')}
  />
```

#### chips 🗂️

```jsx
  <Chip
    label="Chip"
    onClick={() => console.log('clicked')}
  />
```

#### tool tips 🗂️

```jsx
  <Tooltip
    title="Tooltip"
  >
    <Button>Hover</Button>
  </Tooltip>
```

#### progress bar 🗂️

```jsx
  <ProgressBar
    value={50}
  />
```

#### lists 🗂️

```jsx
  <List>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
```

## Organisms

#### accordion 🗂️

```jsx
  <Accordion>
    <AccordionItem title="Accordion Item 1">
      <p>Accordion Content 1</p>
    </AccordionItem>
    <AccordionItem title="Accordion Item 2">
      <p>Accordion Content 2</p>
    </AccordionItem>
  </Accordion>
```

#### breadcrumb 🗂️

  ```jsx
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Page 1</BreadcrumbItem>
      <BreadcrumbItem>Page 2</BreadcrumbItem>
    </Breadcrumb>
  ```

#### progress stepper 🗂️

```jsx
  <ProgressStepper
    steps={[
      { label: 'Step 1', active: true },
      { label: 'Step 2', active: false },
      { label: 'Step 3', active: false },
    ]}
  />
```

#### tabs 🗂️

```jsx
  <Tabs
    tabs={[
      { label: 'Tab 1', content: <p>Tab 1 Content</p> },
      { label: 'Tab 2', content: <p>Tab 2 Content</p> },
      { label: 'Tab 3', content: <p>Tab 3 Content</p> },
    ]}
  />
```

#### pagination 🗂️

```jsx
  <Pagination
    total={100}
    perPage={10}
    currentPage={1}
    onChange={(page) => console.log(page)}
  />
```

#### action list 🗂️

```jsx
  <ActionList
    actions={[
      { label: 'Action 1', onClick: () => console.log('Action 1') },
      { label: 'Action 2', onClick: () => console.log('Action 2') },
      { label: 'Action 3', onClick: () => console.log('Action 3') },
    ]}
  />
```

#### CarouselItem 🗂️

```jsx
  <CarouselItem
    image="https://via.placeholder.com/150"
    title="Item 1"
    content="Item 1 Content"
  />
```

## Templates

#### alert 🗂️

```jsx
  <Alert
    title="Alert Title"
    message="Alert Message"
    type="success"
    onClose={() => console.log('closed')}
  />
```

#### cards 🗂️

```jsx
  <Card
    title="Card Title"
    content="Card Content"
    actions={[
      { label: 'Action 1', onClick: () => console.log('Action 1') },
      { label: 'Action 2', onClick: () => console.log('Action 2') },
    ]}
  />
```

#### carousel 🗂️

Carousel with banner image text and buttons & with indicator to scroll horizontally

```jsx
  <Carousel
    items={[
      { image: 'https://via.placeholder.com/150', title: 'Item 1', content: 'Item 1 Content' },
      { image: 'https://via.placeholder.com/150', title: 'Item 2', content: 'Item 2 Content' },
      { image: 'https://via.placeholder.com/150', title: 'Item 3', content: 'Item 3 Content' },
    ]}
  />
```

#### coachmarks 🗂️

```jsx
  <Coachmarks
    steps={[
      { target: '.target-1', title: 'Step 1', content: 'Step 1 Content' },
      { target: '.target-2', title: 'Step 2', content: 'Step 2 Content' },
      { target: '.target-3', title: 'Step 3', content: 'Step 3 Content' },
    ]}
  />
```

#### table 🗂️

  ```jsx
    <Table
      columns={[
        { label: 'Column 1', key: 'column1' },
        { label: 'Column 2', key: 'column2' },
        { label: 'Column 3', key: 'column3' },
      ]}
      data={[
        { column1: 'Row 1 Column 1', column2: 'Row 1 Column 2', column3: 'Row 1 Column 3' },
        { column1: 'Row 2 Column 1', column2: 'Row 2 Column 2', column3: 'Row 2 Column 3' },
        { column1: 'Row 3 Column 1', column2: 'Row 3 Column 2', column3: 'Row 3 Column 3' },
      ]}
    />
  ```

#### dialog 🗂️

```jsx
  <Dialog
    open={true}
    title="Dialog Title"
    content="Dialog Content"
    actions={[
      { label: 'Action 1', onClick: () => console.log('Action 1') },
      { label: 'Action 2', onClick: () => console.log('Action 2') },
    ]}
    onClose={() => console.log('closed')}
  />
```

#### sheets 🗂️

```jsx
  <Sheet
    open={true}
    title="Sheet Title"
    content="Sheet Content"
    actions={[
      { label: 'Action 1', onClick: () => console.log('Action 1') },
      { label: 'Action 2', onClick: () => console.log('Action 2') },
    ]}
    onClose={() => console.log('closed')}
  />
```

#### notifications 🗂️

```jsx
  <Notifications
    notifications={[
      { title: 'Notification 1', message: 'Notification 1 Message', type: 'success' },
      { title: 'Notification 2', message: 'Notification 2 Message', type: 'error' },
      { title: 'Notification 3', message: 'Notification 3 Message', type: 'warning' },
    ]}
    onClose={(index) => console.log(index)}
  />
```

#### snack bars 🗂️

```jsx
  <Snackbars
    snackbars={[
      { message: 'Snackbar 1', type: 'success' },
      { message: 'Snackbar 2', type: 'error' },
      { message: 'Snackbar 3', type: 'warning' },
    ]}
    onClose={(index) => console.log(index)}
  />
```

#### header 🗂️

  ```jsx
    <Header
      title="Header Title"
      actions={[
        { label: 'Action 1', onClick: () => console.log('Action 1') },
        { label: 'Action 2', onClick: () => console.log('Action 2') },
      ]}
    />
  ```

#### footer 🗂️

    ```jsx
      <Footer
        title="Footer Title"
        actions={[
          { label: 'Action 1', onClick: () => console.log('Action 1') },
          { label: 'Action 2', onClick: () => console.log('Action 2') },
        ]}
      />
    ```
