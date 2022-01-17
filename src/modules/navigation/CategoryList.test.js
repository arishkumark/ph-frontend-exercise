import { render, screen } from '@testing-library/react';
import CategoryList from './CategoryList';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

const data = [
  {
    "title": "Reporting",
    "url": null,
    "id": "menu-reporting",
    "icon": "reporting",
    "hasAlert": null,
    "children": [
      {
        "title": "Sales Dashboard",
        "url": "https://partnerswayfaircom.csnzoo.com/v/sales_dashboard/index",
        "id": "menu-sales-dashboard",
        "icon": null,
        "hasAlert": null,
        "children": [
          
        ]
      },
    ]
  }
]
describe('Treeview component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <CategoryList data={data}/>
      </ThemeProvider>
    );
  })

  it('showing treeview correctly', () => {
    const loader = screen.getByTestId('categoryList');
    expect(loader).toBeInTheDocument();
  });
});
