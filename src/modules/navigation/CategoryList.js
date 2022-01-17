import React, { useState, useEffect } from 'react'
import { withStyles } from '@mui/styles';
import { Box, Typography, Badge } from '@mui/material';
import { TreeView, TreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import CastleRoundedIcon from '@mui/icons-material/CastleRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';

const Styles = theme => ({
  content: {
    flexDirection: 'row-reverse'
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
  iconContainer: {
    paddingRight: 16
  },
  iconBox: {
    minWidth: 60,
    paddingLeft: 2
  }
})

const CategoryList = ({ data, classes, drawerOpen, onNodeToggle }) => {

  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    if (!drawerOpen) {
      setExpanded([])
    }
  }, [drawerOpen])

  const handleNodeToggle = (e, nodeIds) => {
    setExpanded(nodeIds)
    onNodeToggle()
  }
  const iconsList = {
    reporting: <AssessmentRoundedIcon color="primary" />,
    tickets: <ConfirmationNumberRoundedIcon color="primary" />,
    castleGate: <CastleRoundedIcon color="primary" />,
    inventory: <InventoryRoundedIcon color="primary" />,
    products: <CategoryRoundedIcon color="primary" />,
    premiumShelf: <WorkspacePremiumRoundedIcon color="primary" />,
    downloadCenter: <CloudDownloadRoundedIcon color="primary" />,
    helpAndSupport: <HelpCenterRoundedIcon color="primary" />
  }

  const getIcon = (icon, hasAlert) => {
    let reqIcon = <SentimentSatisfiedAltRoundedIcon color="primary" />
    if (icon && iconsList[icon]) {
      reqIcon = iconsList[icon]
    }
    return (
      <Badge color="secondary" variant="dot" invisible={!hasAlert}>
        {reqIcon}
      </Badge>
    )
  }

  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={
        <Box className={classes.labelRoot}>
          <Box className={classes.iconBox}>{getIcon(nodes.icon, nodes.hasAlert)}</Box>
          <Typography variant="body2" className={classes.labelText} noWrap>
            {nodes.title}
          </Typography>
        </Box>
      }
      classes={{
        content: classes.content,
        iconContainer: classes.iconContainer
      }}
    >
      {(Array.isArray(nodes.children) && nodes.children.length > 0)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <Box data-testid="categoryList">
      {
        data.map((category) => (
          <TreeView
            key={category.id}
            aria-label="category list"
            defaultCollapseIcon={<ExpandLessIcon />}
            defaultExpandIcon={drawerOpen ? <ExpandMoreIcon /> : null}
            onNodeToggle={handleNodeToggle}
            expanded={expanded}
          >
            {renderTree(category)}
          </TreeView>
        ))
      }
    </Box>
  );
}

export default withStyles(Styles)(CategoryList);

